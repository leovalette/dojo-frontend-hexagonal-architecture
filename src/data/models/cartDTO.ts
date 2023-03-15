import { ProductDTO } from './productDTO';

export type CartDTO = {
  id: string;
  products: ProductDTO[];
};
