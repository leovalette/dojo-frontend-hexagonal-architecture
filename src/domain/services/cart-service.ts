import { serviceRegistry } from '../../service-registry/service-registry';
import {
  Cart,
  hasProduct,
  isCartFull,
  isCartLimitPriceExceeded,
} from '../models/cart';
import { Product } from '../models/product';
import { ICart } from '../ports/ICart';

const createCart = (): Promise<Cart> =>
  serviceRegistry.cartDataPort.createCart();

const addProductToCart = (cart: Cart, product: Product): Promise<Cart> => {
  if (
    isCartLimitPriceExceeded(cart, product) ||
    isCartFull(cart) ||
    hasProduct(cart, product)
  ) {
    return Promise.reject(cart);
  }
  return serviceRegistry.cartDataPort.addProductToCart(cart, product);
};

const removeProductFromCart = (cart: Cart, product: Product): Promise<Cart> =>
  serviceRegistry.cartDataPort.removeProductFromCart(cart, product);

export const cartDomainService: ICart = {
  createCart,
  addProductToCart,
  removeProductFromCart,
};
