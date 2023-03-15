import { FC, useCallback, useMemo, useState } from 'react';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import { addProduct, Product, removeProduct } from './services/product-service';

export const App: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const totalPrice = useMemo<Product['price']>(
    () =>
      Number(products.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)),
    [products]
  );

  const onProductClick = useCallback(
    (product: Product) => {
      if (totalPrice + product.price > 1500) {
        return;
      }
      if (products.includes(product)) {
        return;
      }
      setProducts([...products, product]);
      addProduct(product);
    },
    [products, totalPrice]
  );

  const onRemoveProductClick = useCallback(
    (product: Product) => {
      setProducts(products.filter(({ id }) => product.id !== id));
      removeProduct(product);
    },
    [products]
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
          <Cart
            products={products}
            onRemoveProductClick={onRemoveProductClick}
          />
          <div className='text-xl text-red-500'>Price : {totalPrice}€</div>
        </div>
      </div>
    </div>
  );
};
