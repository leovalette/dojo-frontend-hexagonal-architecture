import { cartDataAdapter } from '../data/adapters/cart-adapter';
import { productDataAdapter } from '../data/adapters/product-adapter';
import { ICart } from '../domain/ports/ICart';
import { IProduct } from '../domain/ports/IProduct';
import { cartDomainService } from '../domain/services/cart-service';
import { productDomainService } from '../domain/services/product-service';

type ServiceRegistry = {
  cartDomainPort: ICart;
  cartDataPort: ICart;
  productDomainPort: IProduct;
  productDataPort: IProduct;
};

export const serviceRegistry: ServiceRegistry = {
  cartDataPort: cartDataAdapter,
  cartDomainPort: cartDomainService,
  productDataPort: productDataAdapter,
  productDomainPort: productDomainService,
};
