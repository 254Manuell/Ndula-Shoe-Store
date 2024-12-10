export interface Product {
    id: string
    name: string
    price: number
    image: string
  }
  
  export const products: Product[] = [
    {
      id: '1',
      name: 'Classic Runner',
      price: 89.99,
      image: 'https://via.placeholder.com/300x300.png?text=Classic+Runner',
    },
    {
      id: '2',
      name: 'Urban Hiker',
      price: 129.99,
      image: 'https://via.placeholder.com/300x300.png?text=Urban+Hiker',
    },
    {
      id: '3',
      name: 'Street Style',
      price: 99.99,
      image: 'https://via.placeholder.com/300x300.png?text=Street+Style',
    },
  ]
  
  