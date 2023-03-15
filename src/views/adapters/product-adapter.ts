import { IProduct } from '../../domain/ports/IProduct';
import { serviceRegistry } from '../../service-registry/service-registry';
import { ProductUI } from '../models/productUI';

type ProductDomainAdapter = {
  getProducts: () => Promise<ProductUI[]>;
};

const productDomainService: IProduct = serviceRegistry.productDomainPort;

const getProducts = (): Promise<ProductUI[]> =>
  productDomainService.getProducts();

export const productDomainAdapter: ProductDomainAdapter = {
  getProducts,
};
