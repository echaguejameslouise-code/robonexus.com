
export enum Category {
  CONSTRUCTION = 'Construction',
  AGRICULTURE = 'Agriculture',
  ARDUINO = 'Educational / Arduino',
  ALL = 'All'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
  specs: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
