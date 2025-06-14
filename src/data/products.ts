import { Product } from '../components/ProductCard';

export const products: Product[] = [
  // Burgers
  {
    id: 1,
    name: "Classic Beef Burger",
    description: "Juicy beef patty with fresh lettuce, tomato, onion, and our special sauce on a brioche bun",
    price: 12.99,
    originalPrice: 14.99,
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Burgers",
    rating: 4.8,
    isPopular: true
  },
  {
    id: 2,
    name: "Chicken Deluxe",
    description: "Crispy chicken breast with bacon, cheese, lettuce, and honey mustard on a sesame bun",
    price: 13.99,
    image: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Burgers",
    rating: 4.7,
    isNew: true
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "Plant-based patty with avocado, sprouts, tomato, and vegan mayo on whole wheat bun",
    price: 11.99,
    image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Burgers",
    rating: 4.5
  },
  {
    id: 4,
    name: "BBQ Bacon Burger",
    description: "Double beef patty with BBQ sauce, crispy bacon, cheddar cheese, and onion rings",
    price: 15.99,
    originalPrice: 17.99,
    image: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Burgers",
    rating: 4.9,
    isPopular: true
  },

  // Pizza
  {
    id: 5,
    name: "Margherita Classic",
    description: "Fresh mozzarella, tomato sauce, basil leaves, and olive oil on hand-tossed dough",
    price: 16.99,
    image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pizza",
    rating: 4.6
  },
  {
    id: 6,
    name: "Pepperoni Supreme",
    description: "Loaded with pepperoni, mozzarella cheese, and our signature tomato sauce",
    price: 18.99,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pizza",
    rating: 4.8,
    isPopular: true
  },
  {
    id: 7,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, and ground beef with extra cheese",
    price: 21.99,
    originalPrice: 24.99,
    image: "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pizza",
    rating: 4.7
  },
  {
    id: 8,
    name: "Veggie Garden",
    description: "Bell peppers, mushrooms, onions, tomatoes, olives, and feta cheese",
    price: 17.99,
    image: "https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Pizza",
    rating: 4.4
  },

  // Chicken
  {
    id: 9,
    name: "Crispy Chicken Tenders",
    description: "Hand-breaded chicken strips served with honey mustard and BBQ sauce",
    price: 9.99,
    image: "https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Chicken",
    rating: 4.5,
    isNew: true
  },
  {
    id: 10,
    name: "Buffalo Wings",
    description: "Spicy buffalo wings served with celery sticks and blue cheese dip",
    price: 11.99,
    image: "https://images.pexels.com/photos/3791088/pexels-photo-3791088.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Chicken",
    rating: 4.6,
    isPopular: true
  },
  {
    id: 11,
    name: "Grilled Chicken Salad",
    description: "Fresh mixed greens with grilled chicken, cherry tomatoes, and balsamic dressing",
    price: 12.99,
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Chicken",
    rating: 4.3
  },

  // Sides
  {
    id: 12,
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese, bacon bits, and green onions",
    price: 6.99,
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Sides",
    rating: 4.7,
    isPopular: true
  },
  {
    id: 13,
    name: "Onion Rings",
    description: "Golden crispy onion rings served with ranch dipping sauce",
    price: 5.99,
    image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Sides",
    rating: 4.4
  },
  {
    id: 14,
    name: "Mac & Cheese",
    description: "Creamy macaroni and cheese with breadcrumb topping",
    price: 7.99,
    image: "https://images.pexels.com/photos/24501776/pexels-photo-24501776.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Sides",
    rating: 4.6
  },

  // Drinks
  {
    id: 15,
    name: "Fresh Lemonade",
    description: "Freshly squeezed lemons with a touch of mint",
    price: 3.99,
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Drinks",
    rating: 4.5
  },
  {
    id: 16,
    name: "Chocolate Milkshake",
    description: "Rich chocolate milkshake topped with whipped cream and cherry",
    price: 5.99,
    image: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Drinks",
    rating: 4.8,
    isPopular: true
  },

  // Desserts
  {
    id: 17,
    name: "Chocolate Brownie",
    description: "Warm chocolate brownie with vanilla ice cream and hot fudge",
    price: 6.99,
    image: "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Desserts",
    rating: 4.7
  },
  {
    id: 18,
    name: "Apple Pie",
    description: "Traditional apple pie with cinnamon and a flaky crust, served warm",
    price: 5.99,
    originalPrice: 7.99,
    image: "https://images.pexels.com/photos/6419732/pexels-photo-6419732.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Desserts",
    rating: 4.5,
    isNew: true
  }
];

export const categories = [
  "All",
  "Burgers", 
  "Pizza", 
  "Chicken", 
  "Sides", 
  "Drinks", 
  "Desserts"
];