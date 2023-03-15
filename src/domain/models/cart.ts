import { Product } from './product';

export type Cart = {
  id: string;
  products: Product[];
};

const LIMIT_PRICE = 1500;
const MAX_PRODUCTS = 10;

export const hasProduct = ({ products }: Cart, product: Product): boolean =>
  !!products.find(({ id }) => id === product.id);

export const isCartFull = ({ products }: Cart): boolean =>
  products.length >= MAX_PRODUCTS;

export const getTotalPrice = ({ products }: Cart): number =>
  Number(products.reduce((acc, curr) => acc + curr.price, 0).toFixed(2));

export const isCartLimitPriceExceeded = (
  { products }: Cart,
  { price }: Product
): boolean => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, price);

  return totalPrice > LIMIT_PRICE;
};
