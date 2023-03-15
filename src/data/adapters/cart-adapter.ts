import { Cart } from '../../domain/models/cart';
import { Product } from '../../domain/models/product';
import { ICart } from '../../domain/ports/ICart';

const createCart = (): Promise<Cart> =>
  Promise.resolve({ id: '1', products: [] });

const addProductToCart = (cart: Cart, product: Product): Promise<Cart> =>
  Promise.resolve({
    ...cart,
    products: [...cart.products, product],
  });

const removeProductFromCart = (cart: Cart, product: Product): Promise<Cart> =>
  Promise.resolve({
    ...cart,
    products: cart.products.filter(({ id }) => product.id !== id),
  });

export const cartDataAdapter: ICart = {
  addProductToCart,
  createCart,
  removeProductFromCart,
};
