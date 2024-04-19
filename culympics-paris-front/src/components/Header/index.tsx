import { HeaderContainer, ExploreButton } from './styles'

import { NavLink } from 'react-router-dom'

import culympicsLogo from '../../assets/culympics-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img width={200} height={70} src={culympicsLogo} alt="Culympics Logo" />

      <NavLink to="/">
        <ExploreButton>Explore</ExploreButton>
      </NavLink>
    </HeaderContainer>
  )
}
