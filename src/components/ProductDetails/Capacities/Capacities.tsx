import { FC } from 'react';
import './Capacities.scss';
import { NavLink, useParams } from 'react-router-dom';
import { ProductType } from '@/types/ProductType';
import classNames from 'classnames';

type Props = {
  productType: ProductType;
  capacities: string[];
};

export const Capacities: FC<Props> = ({
  productType,
  capacities,
}) => {
  const { itemCard } = useParams();

  return (
    <section className="capacities">
      {capacities.map((capacity: string) => {
        const capacityLink = (itemCard || '')
          .split('-')
          .map((item: string) => (
            item.includes('gb')
            || item.includes('tb')
            || item.includes('mm')
              ? capacity
              : item
          ))
          .join('-')
          .toLowerCase();
        
        return (
          <NavLink
            key={capacity}
            to={`/${productType}/${capacityLink}`}
            className={({ isActive }) => classNames(
              'capacity__button', {
                'capacity__button--active': isActive,
              }
            )}
          >
            {capacity}
          </NavLink>
        );
      })}
    </section>
  );
};