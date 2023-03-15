import { FC } from 'react';
import { Product } from '../services/product-service';

type CartProps = {
  products: Product[];
  onRemoveProductClick: (product: Product) => void;
};
export const Cart: FC<CartProps> = ({ products, onRemoveProductClick }) => {
  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {products.map((product) => (
        <div
          key={product.id}
          className='rounded bg-purple-400 w-32 h-32 p-2 flex flex-col items-center justify-between text-center'
        >
          <div>{product.name}</div>
          <div>{product.price}€</div>
          <button
            onClick={() => onRemoveProductClick(product)}
            className='cursor-pointer bg-red-500 text-xs p-2'
          >
            Remove product
          </button>
        </div>
      ))}
    </div>
  );
};
