
export type Category = 'Summer' | 'Winter' | 'Shoes' | 'Jackets' | 'Suits' | 'All';

export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  category: Category;
  description: string;
  material: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  image: string;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}
