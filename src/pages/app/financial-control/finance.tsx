import { endOfMonth, startOfMonth, startOfToday } from 'date-fns'
import { Download, Filter } from 'lucide-react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { useMediaQuery } from 'react-responsive'

import { MonthPickerMenu } from '@/components/month-picker-menu'
import { Button } from '@/components/ui/button'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { BalanceCard } from './balance-card'
import { CardCarousel } from './cards-carousel'
import { columns, Transaction } from './columns'
import { DataTable } from './data-table'
import { ExpenseCard } from './expense-card'
import { IncomeCard } from './income-card'
import { TotalBalanceCard } from './total-balance-card'
import { TransactionItem } from './transaction-item'

export function Finance() {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: startOfMonth(startOfToday()),
    to: new Date(),
  })
  const [activeDateFilter, setActiveDateFilter] = useState<'month' | 'range'>(
    'month',
  )
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(startOfToday()))

  const handleMonthChange = (newMonth: Date) => {
    setCurrentMonth(newMonth)
    setDateRange({
      from: startOfMonth(newMonth),
      to: endOfMonth(newMonth),
    })
    setActiveDateFilter('month')
  }

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range)
    if (range?.from && range?.to) {
      setActiveDateFilter('range')
      setCurrentMonth(startOfMonth(range.from))
    }
  }

  const transactions: Transaction[] = [
    {
      id: 'a1b2c3d4e5f6g7h8i9j0',
      date: '2025-04-28T09:15:00Z',
      amount: 150.75,
      type: 'expense',
      description: 'Compra de supermercado semanal',
    },
    {
      id: 'k1l2m3n4o5p6q7r8s9t0',
      date: '2025-04-29T14:00:00Z',
      amount: 5000.0,
      type: 'income',
      description: 'Salário Abril',
    },
    {
      id: 'u1v2w3x4y5z6a7b8c9d0',
      date: '2025-04-29T18:30:00Z',
      amount: 85.5,
      type: 'expense',
      description: 'Jantar em restaurante',
    },
    {
      id: 'e1f2g3h4i5j6k7l8m9n0',
      date: '2025-04-30T11:05:00Z',
      amount: 45.0,
      type: 'expense',
      description: 'Assinatura streaming de música',
    },
    {
      id: 'o1p2q3r4s5t6u7v8w9x0',
      date: '2025-05-01T08:00:00Z',
      amount: 1200.0,
      type: 'income',
      description: 'Pagamento Freelance Projeto Y',
    },
    {
      id: 'y1z2a3b4c5d6e7f8g9h0',
      date: '2025-05-01T10:45:00Z',
      amount: 65.2,
      type: 'expense',
      description: 'Transporte (Uber)',
    },
    {
      id: 'i1j2k3l4m5n6o7p8q9r0',
      date: '2025-05-02T15:20:00Z',
      amount: 250.0,
      type: 'expense',
      description: 'Compra de roupas',
    },
    {
      id: 's1t2u3v4w5x6y7z8a9b0',
      date: '2025-05-03T09:00:00Z',
      amount: 75.0,
      type: 'income',
      description: 'Reembolso de despesa médica',
    },
    {
      id: 'c1d2e3f4g5h6i7j8k9l0',
      date: '2025-05-03T16:55:00Z',
      amount: 98.9,
      type: 'expense',
      description: 'Farmácia',
    },
    {
      id: 'm1n2o3p4q5r6s7t8u9v0',
      date: '2025-05-04T11:30:00Z',
      amount: 200.0,
      type: 'expense',
      description: 'Gasolina',
    },
    {
      id: 'w1x2y3z4a5b6c7d8e9f0',
      date: '2025-05-05T10:00:00Z',
      amount: 180.0,
      type: 'expense',
      description: 'Conta de luz',
    },
    {
      id: 'g1h2i3j4k5l6m7n8o9p0',
      date: '2025-05-05T14:10:00Z',
      amount: 300.0,
      type: 'income',
      description: 'Venda de item usado (videogame)',
    },
    {
      id: 'q1r2s3t4u5v6w7x8y9z0',
      date: '2025-05-06T19:00:00Z',
      amount: 55.0,
      type: 'expense',
      description: 'Cinema com amigos',
    },
    {
      id: 'a2b3c4d5e6f7g8h9i0j1',
      date: '2025-05-07T08:45:00Z',
      amount: 120.3,
      type: 'expense',
      description: 'Livros para estudo',
    },
    {
      id: 'k2l3m4n5o6p7q8r9s0t1',
      date: '2025-05-08T12:00:00Z',
      amount: 1500.0,
      type: 'expense',
      description: 'Pagamento Aluguel',
    },
    {
      id: 'u2v3w4x5y6z7a8b9c0d1',
      date: '2025-05-08T17:30:00Z',
      amount: 850.0,
      type: 'income',
      description: 'Consultoria Cliente Z',
    },
    {
      id: 'e2f3g4h5i6j7k8l9m0n1',
      date: '2025-05-09T09:50:00Z',
      amount: 70.0,
      type: 'expense',
      description: 'Conta de água',
    },
    {
      id: 'o2p3q4r5s6t7u8v9w0x1',
      date: '2025-05-10T13:25:00Z',
      amount: 15.9,
      type: 'expense',
      description: 'Taxa bancária',
    },
    {
      id: 'y2z3a4b5c6d7e8f9g0h1',
      date: '2025-05-10T20:00:00Z',
      amount: 100.0,
      type: 'income',
      description: 'Presente em dinheiro (Aniversário)',
    },
    {
      id: 'i2j3k4l5m6n7o8p9q0r1',
      date: '2025-05-11T10:10:00Z',
      amount: 350.0,
      type: 'expense',
      description: 'Manutenção do carro',
    },
  ]

  const renderDateFilters = () => (
    <div className="flex flex-col gap-3 p-2 md:flex-row md:items-center md:p-0">
      <div className="flex items-center gap-2">
        <Button
          variant={activeDateFilter === 'month' ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => {
            setActiveDateFilter('month')
            handleMonthChange(currentMonth)
          }}
        >
          Por mês
        </Button>
        <Button
          variant={activeDateFilter === 'range' ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => setActiveDateFilter('range')}
        >
          Período
        </Button>
      </div>

      {/* <span className="text-muted-foreground text-sm font-medium">
        {formattedPeriod()}
      </span> */}

      {activeDateFilter === 'month' ? (
        <MonthPickerMenu onMonthChange={handleMonthChange} />
      ) : (
        <DateRangePicker
          date={dateRange}
          onDateChange={handleDateRangeChange}
        />
      )}
    </div>
  )

  return (
    <div className="space-y-6 p-4 md:p-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Finanças</h1>

          <div className="flex items-center gap-3">
            {isMobile ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filtros</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-70" align="end">
                  {renderDateFilters()}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              renderDateFilters()
            )}

            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Exportar</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <TotalBalanceCard />
        </div>
        {isMobile ? (
          <div className="flex w-full items-center">
            <CardCarousel />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-3">
            <BalanceCard />
            <IncomeCard />
            <ExpenseCard />
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transações</h2>
        </div>

        {isMobile ? (
          <div className="space-y-4">
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))
            ) : (
              <p className="text-muted-foreground">
                Nenhuma transação encontrada
              </p>
            )}
          </div>
        ) : (
          <div className="rounded-md border p-4">
            <DataTable columns={columns} data={transactions} />
          </div>
        )}
      </div>
    </div>
  )
}
