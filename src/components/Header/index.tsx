import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTranslationButton } from './styles'

import Logo from '../../assets/logo.svg'
import { NewTransactionModal } from '../../pages/Transactions/components/NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTranslationButton>Nova transação</NewTranslationButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
