import { ExploreConteiner } from './styles'

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
]

export function Explore() {
  return (
    <ExploreConteiner>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          imageURL={restaurant.imageURL}
          address={restaurant.address}
          rating={restaurant.rating}
        />
      ))}
    </ExploreConteiner>
  )
}
