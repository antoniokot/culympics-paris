import { useState, useEffect } from 'react'

import {
  ExploreContainer,
  SectionContainer,
  SectionTitle,
  SectionContent,
} from './styles'

import { RestaurantCard } from '../../components/RestaurantCard'
import api from '../../services/api'

interface Restaurant {
  id: string
  country: string
  name: string
  address: string
  image_url: string
  description: string
  latitude: number
  longitude: number
}

export function Explore() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetchRestaurants()
  }, [])

  async function fetchRestaurants() {
    try {
      const response = await api.getRestaurants('1', '10', 'Spain')
      if (response) {
        setRestaurants(response)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ExploreContainer>
      <SectionContainer>
        <SectionTitle>Most Searched</SectionTitle>
        <SectionContent>
          {restaurants.slice(0, 2).map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              imageURL={restaurant.image_url}
              address={restaurant.address}
              rating={5}
            />
          ))}
        </SectionContent>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Better Reviewed</SectionTitle>
        <SectionContent>
          {restaurants.slice(3, 5).map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              imageURL={restaurant.image_url}
              address={restaurant.address}
              rating={5}
            />
          ))}
        </SectionContent>
      </SectionContainer>
    </ExploreContainer>
  )
}
