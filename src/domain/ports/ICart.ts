import { Cart } from '../models/cart';
import { Product } from '../models/product';

export interface ICart {
  createCart: () => Promise<Cart>;
  addProductToCart: (cart: Cart, product: Product) => Promise<Cart>;
  removeProductFromCart: (cart: Cart, product: Product) => Promise<Cart>;
}
