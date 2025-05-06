import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreVerticalIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export type Transaction = {
  id: string
  date: string
  description: string
  amount: number
  type: 'income' | 'expense'
}

type CustomColumnDef<T> = ColumnDef<T> & {
  title?: string
}

export const columns: CustomColumnDef<Transaction>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'date',
    title: 'Data',
    header: 'Data',
    cell: ({ row }) => {
      const rawDate = row.getValue('date') as string
      const dateObj = new Date(rawDate)

      const formattedDate = dateObj.toLocaleDateString('pt-BR')
      const formattedTime = dateObj.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })

      return (
        <div className="text-sm">
          <span className="font-medium">{formattedDate}</span>
          <span className="text-muted-foreground block text-xs">
            {formattedTime}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
  },
  {
    accessorKey: 'type',
    title: 'Tipo',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Tipo
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const type = row.getValue('type') as 'income' | 'expense'

      return (
        <Badge
          variant="outline"
          className={`text-xs ${
            type === 'income'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400'
              : 'border-red-200 bg-red-50 text-red-600 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400'
          }`}
        >
          {type === 'income' ? 'Receita' : 'Despesa'}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'amount',
    title: 'Valor',
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Valor
            <ArrowUpDown />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const type = row.original.type

      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)

      return (
        <div
          className={`text-right font-bold ${
            type === 'income'
              ? 'text-emerald-600 dark:text-emerald-400'
              : 'text-red-600 dark:text-red-400'
          }`}
        >
          {formatted}
        </div>
      )
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const transaction = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-muted-foreground data-[state=open]:bg-muted flex size-8 text-right"
              size="icon"
            >
              <span className="sr-only">Abrir menu</span>
              <MoreVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(transaction.id)}
            >
              Copiar ID da transação
            </DropdownMenuItem>
            <DropdownMenuItem>Ver detalhes da transação</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
