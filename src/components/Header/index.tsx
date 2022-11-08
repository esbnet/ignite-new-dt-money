import { HeaderContainer, HeaderContent, NewTranslationButton } from "./styles"

import Logo from "../../assets/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt='' />
        <NewTranslationButton>Nova transação</NewTranslationButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
