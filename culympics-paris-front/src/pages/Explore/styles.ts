import styled from 'styled-components'

export const ExploreContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 10rem;
`

export const SectionContainer = styled.section`
  width: 90%;

  margin: 4rem auto 0 auto;
`

export const SectionTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 3rem;
`
