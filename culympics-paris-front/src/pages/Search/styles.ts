import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
`

export const SectionContainer = styled.section`
  width: 60%;
  max-height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 1rem 2rem 0 2rem;
`

export const SectionTitle = styled.span`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 2rem;
`

export const MapContainer = styled.div`
  position: sticky;
  top: 9.56rem;
  right: 0;
  height: calc(100vh - 9.56rem);
  width: 40%;
`
