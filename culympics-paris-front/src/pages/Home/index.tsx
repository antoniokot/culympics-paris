import { NavLink } from 'react-router-dom'

import {
  HomeContainer,
  ImageContainer,
  WelcomeContainer,
  Welcome,
  ContentContainer,
  AboutUs,
  Description,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ImageContainer>
        <WelcomeContainer>
          <Welcome>Welcome to Culympics</Welcome>
        </WelcomeContainer>
      </ImageContainer>
      <ContentContainer>
        <AboutUs>
          <h1>About us</h1>
          <Description>
            Culympics is a web platform design by college students to help our
            users to find their next culinary experience during the Olympic
            Games Paris 2024.
          </Description>
        </AboutUs>
        <NavLink to="/explore">EXPLORE</NavLink>
      </ContentContainer>
    </HomeContainer>
  )
}
