import { FC } from 'react';
import './ProductCapacity.scss';
import { Capacities } from '../Capacities/Capacities';
import { ProductType } from '@/types/ProductType';

type Props = {
  productType: ProductType;
  capacities: string[];
  color: string;
  namespaceId: string;
};

export const ProductCapacity: FC<Props> = ({ productType, capacities, color, namespaceId }) => {
  return (
    <article className="productCapacity">
      <section className="productCapacity__header">
        <p className="productCapacity__header-title">
          Select capacity
        </p>
      </section>
      <section className="productCapacty__options">
        <Capacities
          productType={productType}
          capacities={capacities}
          namespaceId={namespaceId}
          color={color}
        />
      </section>
    </article>
  );
};