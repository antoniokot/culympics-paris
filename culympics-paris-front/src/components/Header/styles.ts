import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  position: absolute;

  width: 100%;
  height: 5rem;

  gap: 2rem;

  display: flex;
  align-items: center;

  background: transparent;
`

export const ExploreButton = styled.button`
  width: 8rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border-bottom: 1px solid ${(props) => props.theme.beige};
  border-radius: 8px;

  appearance: none;
  border: none;
`
