import * as Dialog from "@radix-ui/react-dialog"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"

import {
  CloseButton,
  Content,
  Overlay,
  TrasactionType,
  TrasactionTypeButton,
} from "./styles"

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action=''>
            <input type='text' placeholder='Descrição' required />
            <input type='number' placeholder='Preço' required />
            <input type='text' placeholder='Categoria' required />

            <TrasactionType>
              <TrasactionTypeButton variant="income">
                <ArrowCircleUp size={24}/>
                Entrada
              </TrasactionTypeButton>
              <TrasactionTypeButton variant="outcome">
                <ArrowCircleDown size={24}/>
                Saída
              </TrasactionTypeButton>
            </TrasactionType>

            <button type='submit'>Cadastrar</button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
