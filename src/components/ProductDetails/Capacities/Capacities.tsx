import { FC } from 'react';
import './Capacities.scss';
import { ProductType } from '@/types/ProductType';
import { Capacity } from '../Capacity/Capacity';

type Props = {
  productType: ProductType;
  capacities: string[];
  color: string;
  namespaceId: string;
};

export const Capacities: FC<Props> = ({ productType, capacities, color, namespaceId }) => {
  return (
    <section className="capacities">
      {capacities.map((cap: string) => {
        const currentColor = color.split(' ').join('-');
        const capacityLink = `${namespaceId}-${cap}-${currentColor}`.toLowerCase();
        
        return (
          <Capacity
            key={cap}
            to={`/${productType}/${capacityLink}`}
            capacity={cap}
          />
        );
      })}
    </section>
  );
};