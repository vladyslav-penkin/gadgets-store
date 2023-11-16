import { FC } from 'react';
import './Baskets.scss';
import { Product } from '@/types/Product';
import { Basket } from './Basket/Basket';

type Props = {
  cartItems: Product[];
};

export const Baskets: FC<Props> = ({
  cartItems,
}) => {
  return (
    <section className="baskets">
      {cartItems.map((item: Product) => (
        <Basket
           key={item.id}
          cartItem={item}
        />
      ))}
    </section>
  );
};