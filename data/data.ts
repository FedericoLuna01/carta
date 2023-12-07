import { Category, Product } from "@/types/types"

export const categories: Category[] = [
  {
    id: 1,
    name: 'Bebidas',
  },
  {
    id: 2,
    name: 'Hambuguesas',
  },
  {
    id: 3,
    name: 'Pastas',
  },
  {
    id: 4,
    name: 'Carnes',
  },
]

export const products: Product[] = [
  {
    id: 1,
    name: 'Ensalada de lechuga',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia ut earum suscipit tempora atque vero laudantium recusandae nisi sequi.',
    price: 1,
    image: '/example.jpg'
  },
  {
    id: 2,
    name: 'Hamburguesa de carne doble',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. I',
    price: 2,
    image: '/example-2.jpg',
    sizes: [
      {
        name: 'Chica',
        price: 2
      },
      {
        name: 'Mediana',
        price: 4
      },
      {
        name: 'Grande',
        price: 6
      }
    ],
    extras: [
      {
        name: 'Papas fritas',
        price: 2
      },
      {
        name: 'Gaseosa',
        price: 2
      },
      {
        name: 'Ensalada',
        price: 2
      }
    ]
  },
  {
    id: 3,
    name: 'Pizza de muzzarella',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia ut earum suscipit tempora atque vero laudantium.',
    price: 3,
    image: '/example-3.jpg',
    sizes: [
      {
        name: 'Chica',
        price: 3
      },
      {
        name: 'Mediana',
        price: 5
      },
      {
        name: 'Grande',
        price: 7
      }
    ]
  },
  {
    id: 4,
    name: 'Ensalada',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia ut earum suscipit tempora atqu',
    price: 4,
    image: '/example.jpg'
  },
]