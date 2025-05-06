import { format, startOfMonth, startOfToday } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import MonthPicker from './ui/month-picker'

interface MonthPickerMenuProps {
  onMonthChange?: (newMonth: Date) => void
}

export function MonthPickerMenu({ onMonthChange }: MonthPickerMenuProps) {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(startOfToday()))

  const handleMonthChange = (newMonth: Date) => {
    setCurrentMonth(newMonth)
    onMonthChange?.(newMonth)
  }

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const formattedDate = capitalizeFirstLetter(
    format(currentMonth, 'MMMM yyyy', { locale: ptBR }),
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="over:bg-accent/50 flex items-center gap-2 font-normal transition-colors"
        >
          {formattedDate}
          <ChevronDown className="text-muted-foreground h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto p-0" align="start">
        <MonthPicker
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
