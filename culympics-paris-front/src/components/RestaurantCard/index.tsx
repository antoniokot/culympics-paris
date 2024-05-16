import {
  CardConteiner,
  Banner,
  InfoConteiner,
  Name,
  Address,
  Rating,
} from './styles'

interface CardProps {
  name: string
  imageURL: string
  address: string
  rating: number
}

export function RestaurantCard({ name, imageURL, address, rating }: CardProps) {
  return (
    <CardConteiner>
      <Banner src={imageURL} />
      <InfoConteiner>
        <Name>{name}</Name>
        <Address>{address}</Address>
        <Rating>
          <b>{rating}</b> stars
        </Rating>
      </InfoConteiner>
    </CardConteiner>
  )
}