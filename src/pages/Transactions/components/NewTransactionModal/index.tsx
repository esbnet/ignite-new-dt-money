import * as Dialog from "@radix-ui/react-dialog"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

import {
  CloseButton,
  Content,
  Overlay,
  TrasactionType,
  TrasactionTypeButton,
} from "./styles"
import { Controller, useForm } from "react-hook-form"

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: { type: "income" },
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type='text'
              placeholder='Descrição'
              required
              {...register("description")}
            />
            <input
              type='number'
              placeholder='Preço'
              required
              {...register("price", { valueAsNumber: true })}
            />
            <input
              type='text'
              placeholder='Categoria'
              required
              {...register("category")}
            />
            <Controller
              control={control}
              name='type'
              render={({ field }) => {
                console.log(field)
                return (
                  <TrasactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TrasactionTypeButton variant='income' value='income'>
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TrasactionTypeButton>
                    <TrasactionTypeButton variant='outcome' value='outcome'>
                      <ArrowCircleDown size={24} />
                      Saída
                    </TrasactionTypeButton>
                  </TrasactionType>
                )
              }}
            />

            <button type='submit' disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
