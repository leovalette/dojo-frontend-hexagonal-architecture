import { productList } from '../mocks/productList';

export type Product = {
  id: string;
  name: string;
  price: number;
};

export type Cart = {
  id: string;
  products: Product[];
};

export const createCart = (): Promise<Cart> =>
  Promise.resolve({ id: 'cart', products: [] });

export const addProductToCart = (product: Product, cart: Cart): Promise<Cart> =>
  Promise.resolve({ id: 'cart', products: [...cart.products, product] });

export const getProducts = (): Promise<Product[]> =>
  Promise.resolve(productList);

export const removeProductFromCart = (
  product: Product,
  cart: Cart
): Promise<Cart> =>
  Promise.resolve({
    id: 'cart',
    products: cart.products.filter(({ id }) => product.id !== id),
  });
