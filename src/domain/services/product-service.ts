import { serviceRegistry } from '../../service-registry/service-registry';
import { Product } from '../models/product';
import { IProduct } from '../ports/IProduct';

const getProducts = (): Promise<Product[]> =>
  serviceRegistry.productDataPort.getProducts();

export const productDomainService: IProduct = {
  getProducts,
};
