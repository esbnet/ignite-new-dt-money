import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axios"

interface Transaction {
  id: number
  description: string
  type: "income" | "outcome"
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TrasactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransacrions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params:{ q: query,}
    })

    setTransacrions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TrasactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
      }}
    >
      {children}
    </TrasactionsContext.Provider>
  )
}
