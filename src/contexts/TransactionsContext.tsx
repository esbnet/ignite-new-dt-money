import { createContext, ReactNode, useEffect, useState } from "react"

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
    const url = new URL("http://localhost:3333/transactroins")

    if(query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setTransacrions(data)
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