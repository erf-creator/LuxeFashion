
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Arctic Explorer Parka',
    brand: 'Nordic Peak',
    model: 'AX-2024',
    price: 450,
    category: 'Winter',
    description: 'A heavy-duty parka designed for extreme cold. Features water-resistant shell and premium down insulation.',
    material: 'Gore-Tex Shell, 800-Fill Goose Down',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Midnight Navy', hex: '#1e293b' },
      { name: 'Slate Gray', hex: '#475569' }
    ],
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Azure Breeze Linen Suit',
    brand: 'Riviera Tailors',
    model: 'Summer Elite',
    price: 320,
    category: 'Summer',
    description: 'Perfect for summer weddings or upscale beach events. Breathable linen keeps you cool and sharp.',
    material: '100% Belgian Linen',
    sizes: ['38R', '40R', '42R', '44R'],
    colors: [
      { name: 'Sky Blue', hex: '#bae6fd' },
      { name: 'Sand', hex: '#fef3c7' }
    ],
    image: 'https://images.unsplash.com/photo-1594932224828-b4b059b6f684?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Heritage Leather Boots',
    brand: 'Iron & Oak',
    model: 'Wanderer V2',
    price: 280,
    category: 'Shoes',
    description: 'Handcrafted leather boots that age beautifully. Goodyear welted for lifetime durability.',
    material: 'Full-grain Cowhide Leather',
    sizes: ['8', '9', '10', '11', '12'],
    colors: [
      { name: 'Chestnut', hex: '#78350f' },
      { name: 'Black', hex: '#000000' }
    ],
    image: 'https://images.unsplash.com/photo-1520639889410-d2a6976ce99e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Silk Blend Evening Gown',
    brand: 'Aurelia Lux',
    model: 'Midnight Star',
    price: 580,
    category: 'Suits',
    description: 'Exquisite silk blend gown with hand-stitched details. Elegant silhouette for formal evenings.',
    material: '80% Silk, 20% Polyester',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Emerald', hex: '#065f46' },
      { name: 'Deep Burgundy', hex: '#7f1d1d' }
    ],
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Cashmere Overcoat',
    brand: 'London Tailors',
    model: 'The Regent',
    price: 850,
    category: 'Winter',
    description: 'The pinnacle of luxury winter outerwear. Soft, warm, and timeless.',
    material: '100% Pure Cashmere',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Camel', hex: '#c6a664' },
      { name: 'Charcoal', hex: '#374151' }
    ],
    image: 'https://images.unsplash.com/photo-1539533377285-3412704e59db?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Tech-Performance Runner',
    brand: 'Velocity',
    model: 'Quantum-X',
    price: 195,
    category: 'Shoes',
    description: 'Advanced cushioning technology for maximum performance and comfort during runs.',
    material: 'Recycled Knit Upper, Carbon Plate',
    sizes: ['7', '8', '9', '10', '11'],
    colors: [
      { name: 'Neon Lime', hex: '#bef264' },
      { name: 'Ultra White', hex: '#ffffff' }
    ],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Utility Field Jacket',
    brand: 'Rugged Wear',
    model: 'Outlander',
    price: 210,
    category: 'Jackets',
    description: 'A versatile jacket for all seasons. Multiple pockets and adjustable fit.',
    material: 'Heavyweight Waxed Cotton',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Olive Drab', hex: '#3f6212' },
      { name: 'Khaki', hex: '#d4d4d8' }
    ],
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '8',
    name: 'Summer Breeze Sundress',
    brand: 'Floral & Fern',
    model: 'Daisy-01',
    price: 145,
    category: 'Summer',
    description: 'Lightweight and airy, perfect for hot summer days and casual strolls.',
    material: '100% Organic Cotton',
    sizes: ['XS', 'S', 'M'],
    colors: [
      { name: 'Sunflower Yellow', hex: '#fde047' },
      { name: 'White Lace', hex: '#fafaf9' }
    ],
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop'
  }
];
