import { FC } from 'react';
import './ProductPrice.scss';

type Props = {
  defaultPrice: number;
  actualPrice: number;
};

export const ProductPrice: FC<Props> = ({ defaultPrice, actualPrice }) => {
  return (
    <section className="productPrice">
      <p className="productPrice__price">
        ${actualPrice}
      </p>
      <p className="productPrice__price productPrice__price--discount">
        ${defaultPrice}
      </p>
    </section>
  );
};