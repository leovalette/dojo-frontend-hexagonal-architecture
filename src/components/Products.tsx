import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { getProducts, Product } from '../services/product-service';

type ProductsProps = { onProductClick: (product: Product) => void };
export const Products: FC<ProductsProps> = ({ onProductClick }) => {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    initialData: [],
  });

  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onProductClick(product)}
          className='cursor-pointer rounded bg-orange-400 w-28 h-20 flex flex-col items-center justify-center text-center'
        >
          <div>{product.name}</div>
          <div>{product.price}€</div>
        </div>
      ))}
    </div>
  );
};
