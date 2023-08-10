import { useMemo } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export const useSummary = () => {
  const { transactions } = useContextSelector(
    // useContextSelector: permite que você selecione apenas o que você precisa de um contexto, evitando que o componente seja renderizado novamente quando o valor de outro estado do contexto for alterado
    TransactionsContext,
    (context) => {
      return context
    },
  )

  const summary = useMemo(() => {
    // useMemo: memoriza o valor de uma variável, para que ela não seja recriada toda vez que o componente for renderizado
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }
        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
