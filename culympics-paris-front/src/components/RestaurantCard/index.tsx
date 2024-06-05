import {
  CardContainer,
  Banner,
  InfoContainer,
  Name,
  Address,
  Rating,
} from './styles'

interface CardProps {
  readonly name: string
  readonly imageURL: string
  readonly address: string
  readonly rating: number
}

export function RestaurantCard({ name, imageURL, address, rating }: CardProps) {
  return (
    <CardContainer>
      <Banner src={imageURL} />
      <InfoContainer>
        <Name>{name}</Name>
        <Address>{address}</Address>
        <Rating>
          <b>{rating}</b> stars
        </Rating>
      </InfoContainer>
    </CardContainer>
  )
}
