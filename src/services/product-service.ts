import { productList } from '../mocks/productList';

export type Product = {
  id: string;
  name: string;
  price: number;
};
export const addProduct = (product: Product): Promise<Product[]> =>
  Promise.resolve([]);

export const getProducts = (): Promise<Product[]> =>
  Promise.resolve(productList);

  export const removeProduct = (product: Product): Promise<Product[]> =>
  Promise.resolve([]);