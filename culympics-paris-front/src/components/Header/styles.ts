import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  position: sticky;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: transparent;
  border-bottom: 1px solid ${(props) => props.theme['gray-300']};
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

export const CategoryConteiner = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 20%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CategoryButton = styled.button`
  letter-spacing: 2px;
  color: ${(props) => props.theme['gray-500']};
  background: ${(props) => props.theme.white};

  border: none;
  appearance: none;
  outline: none;

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.black};
  }
`

export const SearchConteiner = styled.div`
  position: relative;

  width: 40%;

  display: flex;
  align-items: center;
`

export const SearchBar = styled.input`
  width: 100%;
  height: 3rem;

  color: ${(props) => props.theme.black};
  letter-spacing: 2px;
  background: ${(props) => props.theme.white};

  margin-top: 2rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 40px;
  padding: 30px;

  transition: 0.3s;

  appearance: none;

  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); // Adjust values and color as needed
`

export const IconConteiner = styled.div`
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
