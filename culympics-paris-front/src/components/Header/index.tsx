import { NavLink } from 'react-router-dom'

import {
  HeaderContainer,
  Navbar,
  SearchConteiner,
  Dropdown,
  SearchBar,
  IconConteiner,
} from './styles'
import { House, MagnifyingGlass } from 'phosphor-react'

import culympicsLogo from '../../assets/images/culympics-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <img width={200} height={60} src={culympicsLogo} alt="Culympics Logo" />

        <NavLink to="/">
          <House size={30} />
          <span>Home</span>
        </NavLink>
      </Navbar>
      <SearchConteiner>
        <Dropdown>
          <option value="restaurants">Restaurants</option>
          <option value="cuisines">Cuisines</option>
        </Dropdown>
        <SearchBar placeholder="Which restaurant are you looking for today?" />
        <IconConteiner>
          <MagnifyingGlass size={20} />
        </IconConteiner>
      </SearchConteiner>
    </HeaderContainer>
  )
}
