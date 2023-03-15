import { Product } from '../models/product';

export interface IProduct {
  getProducts: () => Promise<Product[]>;
}
