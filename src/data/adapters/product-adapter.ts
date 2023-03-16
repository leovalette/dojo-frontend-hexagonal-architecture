import { AxiosResponse } from 'axios';
import { Product } from '../../domain/models/product';
import { IProduct } from '../../domain/ports/IProduct';
import { ProductDTO } from '../models/productDTO';
import { get } from '../services/axios';

const getProducts = (): Promise<Product[]> =>
  get<ProductDTO[]>('games?title=bike').then(
    ({ data }: AxiosResponse<ProductDTO[]>) =>
      data.map(({ cheapest, gameID, external }) => ({
        id: gameID,
        name: external,
        price: Number(cheapest),
      }))
  );

export const productDataAdapter: IProduct = {
  getProducts,
};
