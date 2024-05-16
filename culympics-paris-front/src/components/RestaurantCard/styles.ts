import styled from 'styled-components'

export const CardConteiner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
`

interface BannerProps {
  imageURL: string
}

export const Banner = styled.div<BannerProps>`
  flex: 1;

  background: url(${(props) => props.imageURL});
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
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
  font-weight: bold;

  margin-top: 4px;
`

export const Address = styled.span`
  font-size: 0.9rem;
  font-weight: 300;

  margin-top: 4px;
`

export const Rating = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
`
