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

export const betterReviewedRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Passionné',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: 'French cuisine',
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
    address: 'Chinese cuisine',
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
    address: 'Spanish cuisine',
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
    address: 'Dominique Republican cuisine',
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
    address: 'Mexican cuisine',
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
    address: 'French cuisine',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
]

export const mostSearchedRestaurants: Restaurant[] = [
  {
    id: 7,
    name: 'Datil',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    address: 'Italian cuisine',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
  {
    id: 8,
    name: 'Marsan par Hélène Darroze',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    address: 'Portuguese cuisine',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
  {
    id: 9,
    name: 'Lolo Bistrot',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    address: 'German cuisine',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
  {
    id: 10,
    name: 'Racines',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    address: 'Japonese cuisine',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
  {
    id: 11,
    name: 'Mensae',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    address: 'French cuisine',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
  {
    id: 12,
    name: 'Early June',
    description: 'A beautiful traditional french restaurant',
    imageURL:
      'https://images.unsplash.com/photo-1488992783499-418eb1f62d08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D',
    address: 'American cuisine',
    x: 128281393,
    y: 128281393,
    rating: 4.8,
  },
]
