import { HeaderContainer } from './styles'

import culympicsIcon from '../../assets/culympics-icon.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img width={80} height={40} src={culympicsIcon} alt="Culympics Logo" />
    </HeaderContainer>
  )
}
