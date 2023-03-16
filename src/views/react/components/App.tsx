import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { cartDomainAdapter } from '../../adapters/cart-adapter';
import { Cart } from './Cart';
import { Products } from './Products';
import { CartUI } from '../../models/cartUI';
import { ProductUI } from '../../models/productUI';

export const App: FC = () => {
  const [cart, setCart] = useState<CartUI>();

  useEffect(() => {
    cartDomainAdapter.createCart().then(setCart);
  }, []);

  const totalPrice = useMemo<ProductUI['price']>(
    () => (cart ? cartDomainAdapter.getTotalPrice(cart) : 0),
    [cart]
  );

  const onProductClick = useCallback(
    (product: ProductUI) => {
      if (!cart) {
        return;
      }
      cartDomainAdapter.addProductToCart(cart, product).then(setCart);
    },
    [totalPrice, cart]
  );

  const onRemoveProductClick = useCallback(
    (product: ProductUI) => {
      if (!cart) {
        return;
      }
      cartDomainAdapter.removeProductFromCart(cart, product).then(setCart);
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
