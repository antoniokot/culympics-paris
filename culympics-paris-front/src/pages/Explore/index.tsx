import {
  ExploreContainer,
  SectionContainer,
  SectionTitle,
  SectionContent,
} from './styles'

import { RestaurantCard } from '@/components/RestaurantCard'

import {
  mostSearchedRestaurants,
  betterReviewedRestaurants,
} from '@/assets/data/restaurants'

export function Explore() {
  return (
    <ExploreContainer>
      <SectionContainer>
        <SectionTitle>Most Searched</SectionTitle>
        <SectionContent>
          {mostSearchedRestaurants.map((restaurant) => (
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
      <SectionContainer>
        <SectionTitle>Better Reviewed</SectionTitle>
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
    </ExploreContainer>
  )
}
