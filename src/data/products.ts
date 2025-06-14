import { Product } from '../components/ProductCard';

export const products: Product[] = [
  // Hamburguesas
  {
    id: 1,
    name: "Hamburguesa Clásica de Res",
    description: "Jugosa carne de res con lechuga fresca, tomate, cebolla y nuestra salsa especial en pan brioche",
    price: 25900,
    originalPrice: 29900,
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Hamburguesas",
    rating: 4.8,
    isPopular: true
  },
  {
    id: 2,
    name: "Pollo Deluxe",
    description: "Pechuga de pollo crujiente con tocineta, queso, lechuga y mostaza miel en pan de ajonjolí",
    price: 27900,
    image: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Hamburguesas",
    rating: 4.7,
    isNew: true
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "Hamburguesa a base de plantas con aguacate, germinados, tomate y mayonesa vegana en pan integral",
    price: 23900,
    image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Hamburguesas",
    rating: 4.5
  },
  {
    id: 4,
    name: "BBQ Bacon Burger",
    description: "Doble carne de res con salsa BBQ, tocineta crujiente, queso cheddar y aros de cebolla",
    price: 31900,
    originalPrice: 35900,
    image: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Hamburguesas",
    rating: 4.9,
    isPopular: true
  },

  // Pizza
  {
    id: 5,
    name: "Margarita Clásica",
    description: "Mozzarella fresca, salsa de tomate, hojas de albahaca y aceite de oliva en masa artesanal",
    price: 33900,
    image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pizza",
    rating: 4.6
  },
  {
    id: 6,
    name: "Pepperoni Supreme",
    description: "Cargada de pepperoni, queso mozzarella y nuestra salsa de tomate especial",
    price: 37900,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pizza",
    rating: 4.8,
    isPopular: true
  },
  {
    id: 7,
    name: "Amantes de la Carne",
    description: "Pepperoni, salchicha, tocineta, jamón y carne molida con queso extra",
    price: 43900,
    originalPrice: 49900,
    image: "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pizza",
    rating: 4.7
  },
  {
    id: 8,
    name: "Jardín Vegetariano",
    description: "Pimientos, champiñones, cebollas, tomates, aceitunas y queso feta",
    price: 35900,
    image: "https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pizza",
    rating: 4.4
  },

  // Pollo
  {
    id: 9,
    name: "Deditos de Pollo Crujientes",
    description: "Tiras de pollo empanizadas a mano servidas con mostaza miel y salsa BBQ",
    price: 19900,
    image: "https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pollo",
    rating: 4.5,
    isNew: true
  },
  {
    id: 10,
    name: "Alitas Buffalo",
    description: "Alitas picantes buffalo servidas con apio y salsa de queso azul",
    price: 23900,
    image: "https://images.pexels.com/photos/3791088/pexels-photo-3791088.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pollo",
    rating: 4.6,
    isPopular: true
  },
  {
    id: 11,
    name: "Ensalada de Pollo a la Parrilla",
    description: "Mezcla de verdes frescos con pollo a la parrilla, tomates cherry y aderezo balsámico",
    price: 25900,
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pollo",
    rating: 4.3
  },

  // Acompañamientos
  {
    id: 12,
    name: "Papas Cargadas",
    description: "Papas crujientes cubiertas con queso, trocitos de tocineta y cebollín",
    price: 13900,
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Acompañamientos",
    rating: 4.7,
    isPopular: true
  },
  {
    id: 13,
    name: "Aros de Cebolla",
    description: "Aros de cebolla dorados y crujientes servidos con salsa ranch",
    price: 11900,
    image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Acompañamientos",
    rating: 4.4
  },
  {
    id: 14,
    name: "Macarrones con Queso",
    description: "Macarrones cremosos con queso y cobertura de pan rallado",
    price: 15900,
    image: "https://images.pexels.com/photos/24501776/pexels-photo-24501776.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Acompañamientos",
    rating: 4.6
  },

  // Bebidas
  {
    id: 15,
    name: "Limonada Fresca",
    description: "Limones recién exprimidos con un toque de menta",
    price: 7900,
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bebidas",
    rating: 4.5
  },
  {
    id: 16,
    name: "Malteada de Chocolate",
    description: "Rica malteada de chocolate cubierta con crema batida y cereza",
    price: 11900,
    image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Bebidas",
    rating: 4.8,
    isPopular: true
  },

  // Postres
  {
    id: 17,
    name: "Brownie de Chocolate",
    description: "Brownie de chocolate caliente con helado de vainilla y salsa de chocolate",
    price: 13900,
    image: "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Postres",
    rating: 4.7
  },
  {
    id: 18,
    name: "Pie de Manzana",
    description: "Pie tradicional de manzana con canela y masa hojaldrada, servido caliente",
    price: 11900,
    originalPrice: 15900,
    image: "https://images.pexels.com/photos/6419732/pexels-photo-6419732.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Postres",
    rating: 4.5,
    isNew: true
  }
];

export const categories = [
  "Todos",
  "Hamburguesas", 
  "Pizza", 
  "Pollo", 
  "Acompañamientos", 
  "Bebidas", 
  "Postres"
];