import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music enthusiasts and professionals.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, sleep tracking, and workout analytics.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Wearables'
  },
  {
    id: '3',
    name: 'Eco-Friendly Water Bottle',
    description: 'Sustainable and stylish water bottle made from recycled materials. Keeps your drinks cold for 24 hours or hot for 12 hours.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
    category: 'Lifestyle'
  }
];