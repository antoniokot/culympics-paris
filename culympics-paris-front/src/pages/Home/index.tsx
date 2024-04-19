import {
  HomeContainer,
  ContentContainer,
  Content,
  Titel,
  Description,
  ImageContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ContentContainer>
        <Content>
          <Titel>Welcome to Culympics</Titel>
          <Description>
            A web platform design for helping you to find your next meal
          </Description>
        </Content>
      </ContentContainer>
      <ImageContainer />
    </HomeContainer>
  )
}
