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
  const { itemCard: itemCardParams } = useParams();

  return (
    <section className="capacities">
      {capacities.map((cap: string) => {
        const capacityLink = (itemCardParams || '')
          .split('-')
          .map((item: string) => (
            item.includes('gb')
            || item.includes('tb')
            || item.includes('mm')
              ? cap
              : item
          ))
          .join('-')
          .toLowerCase();
        
        return (
          <NavLink
            key={cap}
            to={`/${productType}/${capacityLink}`}
            className={({ isActive }) => classNames(
              'capacity__button', {
                'capacity__button--active': isActive,
              }
            )}
          >
            {cap}
          </NavLink>
        );
      })}
    </section>
  );
};