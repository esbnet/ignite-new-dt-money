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
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TrasactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransacrions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch("http://localhost:3333/transactroins")
    const data = await response.json()
    console.log(data)
    setTransacrions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TrasactionsContext.Provider value={{ transactions }}>
      {children}
    </TrasactionsContext.Provider>
  )
}
