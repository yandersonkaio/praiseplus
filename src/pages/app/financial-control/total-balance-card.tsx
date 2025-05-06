import { Plus, Wallet } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TotalBalanceCard() {
  return (
    <Card className="transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 rounded-lg p-2">
            <Wallet className="text-primary h-5 w-5" />
          </div>
          <CardTitle className="text-muted-foreground text-base font-medium">
            Saldo Total
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="space-y-1">
          <span className="text-3xl font-bold tracking-tight">
            R$ 56.948,60
          </span>
          <p className="text-muted-foreground text-sm">
            Atualizado em {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
        <Button
          className="min-w-36 gap-2 rounded-full text-sm font-medium transition-all hover:shadow-md"
          variant="default"
          size="lg"
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
          Adicionar transação
        </Button>
      </CardContent>
    </Card>
  )
}
