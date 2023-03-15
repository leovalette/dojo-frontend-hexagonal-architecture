import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import {
  addProductToCart,
  Cart as CartType,
  createCart,
  Product,
  removeProductFromCart,
} from './services/product-service';

export const App: FC = () => {
  const [cart, setCart] = useState<CartType>();

  useEffect(() => {
    createCart().then(setCart);
  }, []);

  const totalPrice = useMemo<Product['price']>(
    () =>
      cart
        ? Number(
            cart.products.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)
          )
        : 0,
    [cart]
  );

  const onProductClick = useCallback(
    (product: Product) => {
      if (!cart) {
        return;
      }
      if (totalPrice + product.price > 1500) {
        return;
      }
      if (cart.products.includes(product)) {
        return;
      }
      addProductToCart(product, cart).then(setCart);
    },
    [totalPrice, cart]
  );

  const onRemoveProductClick = useCallback(
    (product: Product) => {
      if (cart) {
        removeProductFromCart(product, cart).then(setCart);
      }
    },
    [cart]
  );

  return (
    <div className='p-8 text-center'>
      <h1 className='mb-16 text-5xl font-bold'>Bike shop</h1>
      <div className='flex justify-between gap-4'>
        <div className='flex flex-1 flex-col items-center bg-blue-100 rounded p-4'>
          <h2 className='mb-6 text-2xl font-bold'>Available products</h2>
          <Products onProductClick={onProductClick} />
        </div>
        <div className='flex flex-1 flex-col items-center bg-blue-100 rounded p-4'>
          <h2 className='mb-6 text-2xl font-bold'>Your cart</h2>
          {cart && (
            <Cart cart={cart} onRemoveProductClick={onRemoveProductClick} />
          )}
          <div className='text-xl text-red-500'>Price : {totalPrice}€</div>
        </div>
      </div>
    </div>
  );
};
