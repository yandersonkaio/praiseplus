import { Transaction } from './columns'
import { TransactionItem } from './transaction-item'

export function TransactionsList({
  transactions,
}: {
  transactions: Transaction[]
}) {
  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  )
}
