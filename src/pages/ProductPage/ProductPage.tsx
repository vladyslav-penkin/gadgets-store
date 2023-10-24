import { FC } from 'react';
import { ProductType } from '../../types/ProductType';

type Props = {
  productType: ProductType;
};

export const ProductPage: FC<Props> = ()  => {
  return (<h1>Product page</h1>);
}