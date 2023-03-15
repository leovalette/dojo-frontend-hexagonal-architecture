import { Product } from '../../domain/models/product';
import { IProduct } from '../../domain/ports/IProduct';
import { productList } from '../../mocks/productList';

const getProducts = (): Promise<Product[]> => Promise.resolve(productList);

export const productDataAdapter: IProduct = {
  getProducts,
};
