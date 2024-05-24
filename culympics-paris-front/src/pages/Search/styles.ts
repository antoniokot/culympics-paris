import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`

export const SectionContainer = styled.section`
  width: 60%;

  margin: 4rem auto 0 auto;
`

export const SectionTitle = styled.span`
  font-size: 3rem;
  margin-bottom: 2rem;
`

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: (5, 1fr);
  justify-content: center;
  gap: 3rem;
`

export const MapContainer = styled.div`
  width: 40%;
  height: 100vh;
`
