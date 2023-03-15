import { getTotalPrice } from '../../domain/models/cart';
import { ICart } from '../../domain/ports/ICart';
import { serviceRegistry } from '../../service-registry/service-registry';
import { CartUI } from '../models/cartUI';
import { ProductUI } from '../models/productUI';

type CartDomainAdapter = ICart & {
  getTotalPrice: (cart: CartUI) => number;
};

const cartDomainService: ICart = serviceRegistry.cartDomainPort;

const createCart = (): Promise<CartUI> => cartDomainService.createCart();

const addProductToCart = (cart: CartUI, product: ProductUI): Promise<CartUI> =>
  cartDomainService.addProductToCart(cart, product);

const removeProductFromCart = (
  cart: CartUI,
  product: ProductUI
): Promise<CartUI> => cartDomainService.removeProductFromCart(cart, product);

export const cartDomainAdapter: CartDomainAdapter = {
  addProductToCart,
  createCart,
  removeProductFromCart,
  getTotalPrice,
};
