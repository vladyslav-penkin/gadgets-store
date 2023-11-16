import { FC, useMemo } from 'react';
import './Checkout.scss';
import { useLocaleStorageContext } from '@hooks/useLocaleStorageContext';

export const Checkout: FC = () => {
  const {
    getTotalPrice,
    getTotalQuantity,
  } = useLocaleStorageContext();
  const totalPrice = useMemo(getTotalPrice, [getTotalPrice]);
  const totalItems = useMemo(getTotalQuantity, [getTotalQuantity]);

  return (
    <section className="checkout">
      <p className="checkout__total-price">
        ${totalPrice}
      </p>
      <p className="checkout__total-items">
        Total for {totalItems} items
      </p>
      <button className="checkout__button">
        Checkout
      </button>
    </section>
  );
};