import { FC } from 'react';
import './ProductsList.scss';
import { ProductCard } from '@components/ProductCard/ProductCard';
import { Product } from '@/types/Product';
import { ProductCardSkeleton } from '../ProductCardSkeleton/ProductCardSkeleton';

type Props = {
  products: Product[];
  isLoading: boolean;
};

export const ProductsList: FC<Props> = ({
  products,
  isLoading,
}) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="productsList">
      {isLoading ? (
        skeletons.map((product: number) => (
          <ProductCardSkeleton
            key={product}
          />
        ))
      ) : (
        products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      )}

    </section>
  );
};