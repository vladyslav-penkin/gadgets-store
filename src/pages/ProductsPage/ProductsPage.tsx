import { FC } from 'react';
import { ProductType } from '../../types/ProductType';

type Props = {
  productType: ProductType;
};

export const ProductsPage: FC<Props> = () => {
  return (<h1>Products page</h1>);
};