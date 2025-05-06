import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CircleArrowDown, CircleArrowUp } from 'lucide-react'

import { Transaction } from './columns'

interface TransactionItemProps {
  transaction: Transaction
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const isIncome = transaction.type === 'income'
  const amountColor = isIncome
    ? 'text-emerald-600 dark:text-emerald-400'
    : 'text-rose-600 dark:text-rose-400'

  const formattedDate = format(
    parseISO(transaction.date),
    'dd MMM yyyy • HH:mm',
    {
      locale: ptBR,
    },
  )

  const formattedAmount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(transaction.amount)

  return (
    <div
      className="bg-card border-border rounded-xl border p-4 shadow-sm transition-all hover:shadow-md"
      role="listitem"
      aria-label={`Transação: ${transaction.description}`}
    >
      <div className="flex items-center gap-3">
        <div
          className="bg-background shrink-0 rounded-full p-2"
          aria-hidden="true"
        >
          {isIncome ? (
            <CircleArrowUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <CircleArrowDown className="h-5 w-5 text-rose-600 dark:text-rose-400" />
          )}
        </div>

        <div className="flex flex-1 items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-foreground text-sm font-medium">
              {transaction.description}
            </span>
            <div className="mt-1 flex items-center gap-2">
              <span className="bg-muted/50 text-muted-foreground rounded-full px-2 py-0.5 text-xs font-medium">
                Mensalidade
              </span>
              <span className="text-muted-foreground text-xs">
                {formattedDate}
              </span>
            </div>
          </div>
          <span
            className={`text-sm font-semibold ${amountColor} whitespace-nowrap`}
            aria-label={`Valor: ${isIncome ? 'Entrada' : 'Saída'} ${formattedAmount}`}
          >
            {isIncome ? '+' : '-'} {formattedAmount}
          </span>
        </div>
      </div>
    </div>
  )
}
