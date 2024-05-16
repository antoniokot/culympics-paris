import styled from 'styled-components'

export const ExploreConteiner = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const SectionConteiner = styled.section`
  width: 90%;

  margin: auto;
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
