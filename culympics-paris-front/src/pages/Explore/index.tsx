import {
  ExploreConteiner,
  SectionConteiner,
  SectionTitle,
  SectionContent,
} from './styles'

import { RestaurantCard } from '../../components/RestaurantCard'

interface Restaurant {
  id: number
  name: string
  description: string
  imageURL: string
  address: string
  x: number
  y: number
  rating: number
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Passionné',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: '17 Rue Bergère, 75009 Paris, França',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Le Servan',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://plus.unsplash.com/premium_photo-1676310055316-d73c9d5eeb51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D',
    address: '17 Rue Bergère, 75009 Paris, França',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Salon de Thé de la Grande Mosquée de Paris',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://plus.unsplash.com/premium_photo-1671394138398-fe1ce5e5b03b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnRzfGVufDB8fDB8fHww',
    address: '17 Rue Bergère, 75009 Paris, França',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Bouillon République',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnRzfGVufDB8fDB8fHww',
    address: '17 Rue Bergère, 75009 Paris, França',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
  {
    id: 5,
    name: 'La Coupole',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnRzfGVufDB8fDB8fHww',
    address: '17 Rue Bergère, 75009 Paris, França',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Le Grand Bain',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJlc3RhdXJhbnRzfGVufDB8fDB8fHww',
    address: '17 Rue Bergère, 75009 Paris, França',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
]

export function Explore() {
  return (
    <ExploreConteiner>
      <SectionConteiner>
        <SectionTitle>Better Reviewed</SectionTitle>
        <SectionContent>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              imageURL={restaurant.imageURL}
              address={restaurant.address}
              rating={restaurant.rating}
            />
          ))}
        </SectionContent>
      </SectionConteiner>
    </ExploreConteiner>
  )
}
