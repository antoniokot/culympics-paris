import styled from 'styled-components'

export const CardConteiner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
`

export const Banner = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1; /* New property to maintain aspect ratio as a square */

  border-radius: 8px;
  object-fit: cover; /* This will ensure the image covers the square area without distortion */
`

export const InfoConteiner = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;

  > span {
    margin-left: 4px;
  }
`

export const Name = styled.span`
  font-size: 1rem;
  font-weight: 700;

  margin-top: 1rem;
`

export const Address = styled.span`
  color: ${(props) => props.theme['gray-700']};
  font-size: 1rem;
  font-weight: 300;

  margin-top: 0.25rem;
`

export const Rating = styled.span`
  font-size: 1rem;

  margin-top: 0.25rem;
`
