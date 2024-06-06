import {
  SearchContainer,
  SectionContainer,
  SectionTitle,
  SectionContent,
  MapContainer,
} from './styles'

import { Map } from '../../components/Map'
import { RestaurantCard } from '../../components/RestaurantCard'

import { betterReviewedRestaurants } from '../../assets/data/restaurants'

export function Search() {
  return (
    <SearchContainer>
      <SectionContainer>
        <SectionTitle>
          {betterReviewedRestaurants.length} restaurants in the map
        </SectionTitle>
        <SectionContent>
          {betterReviewedRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              imageURL={restaurant.imageURL}
              address={restaurant.address}
              rating={restaurant.rating}
            />
          ))}
        </SectionContent>
      </SectionContainer>
      <MapContainer>
        <Map />
      </MapContainer>
    </SearchContainer>
  )
}
