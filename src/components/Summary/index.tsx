import { access } from "fs"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { useContext } from "react"
import { TrasactionsContext } from "../../contexts/TransactionsContext"
import { SummaryCard, SummaryContainer } from "./styles"

export function Summary() {
  const { transactions } = useContext(TrasactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price
      } else {
        acc.outcome += transaction.price
      }
      acc.total = acc.income - acc.outcome
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>

        <strong>{"R$ "+ summary.income}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>

        <strong>{"R$ "+ summary.outcome}</strong>
      </SummaryCard>
      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#fff' />
        </header>

        <strong>{"R$ "+ summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
