import { CircleArrowUp } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function IncomeCard() {
  return (
    <Card className="bg-background">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Entradas</CardTitle>
        <CircleArrowUp className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />
      </CardHeader>
      <CardContent className="space-y-2 space-x-2">
        <span className="text-2xl font-bold tracking-tight text-emerald-500 dark:text-emerald-400">
          +
        </span>
        <span className="text-2xl font-bold tracking-tight text-emerald-500 dark:text-emerald-400">
          R$ 1248,60
        </span>
        <p className="text-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">+2%</span> em
          relação a 30 dias atrás
        </p>
      </CardContent>
    </Card>
  )
}
