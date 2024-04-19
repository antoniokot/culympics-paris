import styled from 'styled-components'

import homeImage from '../../assets/home-image.jpg'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`

export const ContentContainer = styled.main`
  width: 50%;

  flex: 1;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  position: absolute;
  left: 2.5%;
  bottom: 10%;

  max-width: 42rem;

  flex-wrap: wrap-reverse;
`

export const Titel = styled.h1`
  font-size: 6rem;
  font-weight: 500;

  margin-bottom: 4rem;
`

export const Description = styled.div`
  font-size: 2rem;
  font-weight: 200;

  margin-bottom: 4rem;
`

export const ImageContainer = styled.aside`
  max-width: 45rem;

  flex: 1;

  display: flex;

  background-image: url(${homeImage});
  background-position: center;
  background-size: cover;
`
