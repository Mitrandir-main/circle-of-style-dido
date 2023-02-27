export interface Review {
  id: number;
  productId: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: 'clothing' | 'shoes' | 'accessories';
  image: string;
  images?: string[];
}
