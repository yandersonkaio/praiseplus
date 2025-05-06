import {
  add,
  eachMonthOfInterval,
  endOfYear,
  format,
  isEqual,
  isFuture,
  parse,
  startOfMonth,
  startOfToday,
} from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function getStartOfCurrentMonth() {
  return startOfMonth(startOfToday())
}

interface MonthPickerProps {
  currentMonth: Date
  onMonthChange: (newMonth: Date) => void
}

export default function MonthPicker({
  currentMonth,
  onMonthChange,
}: MonthPickerProps) {
  const [currentYear, setCurrentYear] = React.useState(
    format(currentMonth, 'yyyy'),
  )
  const firstDayCurrentYear = parse(currentYear, 'yyyy', new Date())

  const months = eachMonthOfInterval({
    start: firstDayCurrentYear,
    end: endOfYear(firstDayCurrentYear),
  })

  function previousYear() {
    const firstDayNextYear = add(firstDayCurrentYear, { years: -1 })
    setCurrentYear(format(firstDayNextYear, 'yyyy'))
  }

  function nextYear() {
    const firstDayNextYear = add(firstDayCurrentYear, { years: 1 })
    setCurrentYear(format(firstDayNextYear, 'yyyy'))
  }

  return (
    <div className="p-3">
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div className="space-y-4">
          <div className="relative flex items-center justify-center pt-1">
            <div
              className="text-sm font-medium"
              aria-live="polite"
              role="presentation"
              id="month-picker"
            >
              {format(firstDayCurrentYear, 'yyyy')}
            </div>
            <div className="flex items-center space-x-1">
              <button
                name="previous-year"
                aria-label="Go to previous year"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                  'absolute left-1',
                )}
                type="button"
                onClick={previousYear}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                name="next-year"
                aria-label="Go to next year"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                  'disabled:bg-accent absolute right-1',
                )}
                type="button"
                disabled={isFuture(add(firstDayCurrentYear, { years: 1 }))}
                onClick={nextYear}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div
            className="grid w-full grid-cols-3 gap-2"
            role="grid"
            aria-labelledby="month-picker"
          >
            {months.map((month) => (
              <div
                key={month.toString()}
                className="[&:has([aria-selected])]:bg-accent relative p-0 text-center text-sm focus-within:relative focus-within:z-20 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                role="presentation"
              >
                <button
                  name="day"
                  className={cn(
                    'ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-9 w-16 items-center justify-center rounded-md p-0 text-sm font-normal transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100',
                    isEqual(month, currentMonth) &&
                      'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
                    !isEqual(month, currentMonth) &&
                      isEqual(month, getStartOfCurrentMonth()) &&
                      'bg-secondary text-secondary-foreground',
                  )}
                  disabled={isFuture(month)}
                  role="gridcell"
                  tabIndex={-1}
                  type="button"
                  onClick={() => onMonthChange(month)}
                >
                  <time dateTime={format(month, 'yyyy-MM-dd')}>
                    {format(month, 'MMM')}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
