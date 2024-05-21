import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  position: sticky;
  top: 0;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};

  overflow: hidden;
`

export const Navbar = styled.nav`
  position: relative;

  width: 100%;
  height: 4rem;

  display: flex;
  flex-direction: row;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10rem;

  > img {
    position: absolute;
    left: 10%;
  }

  > a {
    position: absolute;
    right: 10%;

    display: flex;
    justify-content: center;
    align-items: end;

    gap: 0.4rem;

    color: ${(props) => props.theme['gray-600']};
    text-decoration: none;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    transition: 0.2s;

    > span {
      font-size: 1.2rem;
    }

    &:hover {
      color: ${(props) => props.theme.black};
      border-bottom: 1px solid ${(props) => props.theme.black};
    }
  }
`

export const SearchContainer = styled.div`
  position: relative;
  width: 40%;
  height: 3.5rem;

  display: grid;
  grid-template-columns: 1fr 4fr; // Adjust the ratio according to your design needs
  align-items: center;
  gap: 20px; // Adds some space between the dropdown and the search bar

  background: ${(props) => props.theme.white};
  border-radius: 40px;
  padding: 0 30px 0 0;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

  margin-bottom: 2rem;
`

export const Dropdown = styled.select`
  width: 100%; // Takes the full width of its grid area
  height: 100%;

  border: none;
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  padding-left: 20px;

  cursor: pointer;
`

export const SearchBar = styled.input`
  width: 100%; // Takes the full width of its grid area
  height: 100%;

  color: ${(props) => props.theme.black};
  border: none;

  transition: 0.3s;
  appearance: none;
`

export const IconContainer = styled.div`
  position: absolute;
  right: 10px; // Adjust based on your design needs

  display: flex;
  align-items: center;
  pointer-events: none; // Makes the icon non-

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.black};
  border-radius: 100%;
  padding: 10px;
`
