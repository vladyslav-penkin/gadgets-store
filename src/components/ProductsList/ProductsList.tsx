import { FC } from 'react';
import './ProductsList.scss';
import { ProductCard } from '@components/ProductCard/ProductCard';
import { ProductCardSkeleton } from '@components/ProductCardSkeleton/ProductCardSkeleton';
import { Product } from '@/types/Product';

type Props = {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
};

export const ProductsList: FC<Props> = ({
  products,
  isLoading,
  isError,
}) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="productsList">
      {isLoading ? (
        skeletons.map((product: number) => (
          <ProductCardSkeleton
            key={product}
            isError={isError}
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