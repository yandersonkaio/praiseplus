import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { BalanceCard } from './balance-card'
import { ExpenseCard } from './expense-card'
import { IncomeCard } from './income-card'

export function CardCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        containScroll: 'trimSnaps',
        startIndex: 0,
        dragFree: true,
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem>
          <BalanceCard />
        </CarouselItem>
        <CarouselItem>
          <IncomeCard />
        </CarouselItem>
        <CarouselItem>
          <ExpenseCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
