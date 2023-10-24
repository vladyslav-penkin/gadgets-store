import { Product } from '@/types/Product';

export type CartItem = Product & {
  quantity: number;
}