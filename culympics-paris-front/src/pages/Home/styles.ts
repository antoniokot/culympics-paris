import styled from 'styled-components'

import homeImage from '../../assets/images/home-image.jpg'

export const HomeContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4em;
`

export const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-image: url(${homeImage});
  background-position: center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.black};
    opacity: 0.6;

    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 30%;
    background: linear-gradient(
      to bottom,
      rgba(12, 12, 12, 0) 0%,
      ${(props) => props.theme.black} 100%
    );
    z-index: 2;
  }
`

export const WelcomeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  align-items: center;
  text-align: center;

  z-index: 2;
`

export const Welcome = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 8rem;
  font-weight: 300;
`

export const ContentContainer = styled.div`
  position: relative;

  width: 100%;
  height: 20rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  color: ${(props) => props.theme.black};

  z-index: 2;

  > a {
    width: 10rem;
    height: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.black};
    font-size: 1rem;
    font-weight: 300;
    text-decoration: none;
    letter-spacing: 2px;
    background: none;

    border: 1px solid ${(props) => props.theme.black};
    border-radius: 4px;

    margin-left: auto;
    margin-right: auto;

    transition: 0.2s;

    &:hover {
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme.white};
    }
  }
`

export const AboutUs = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 20rem;

  text-align: center;

  > h1 {
    font-size: 2rem;
    font-weight: 300;

    margin-bottom: 2rem;
  }
`

export const Description = styled.div`
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.6;
`
