import { FC } from 'react';
import './ProductColors.scss';
import { ProductType } from '@/types/ProductType';
import { ProductColor } from '@components/ProductDetails/ProductColor/ProductColor';
type Props = {
  id: string;
  productId: string;
  colors: string[];
  capacity: string;
  productType: ProductType;
};

export const ProductColors: FC<Props> = ({
  id,
  productId,
  colors,
  capacity,
  productType,
}) => {
  return (
    <section className="colors">
      <div className="colors__header">
        <p className="colors__header-title">Available colors</p>
        <p className="colors__header-id">ID: {productId}</p>
      </div>
      <div className="colors__options">
        {colors.map((color: string) => {
          const currentColor = color.split(' ').join('-');
          const pathname = `/${productType}/${[id, capacity, currentColor].join('-')}`
            .toLowerCase();

          return (
            <ProductColor
              key={currentColor}
              pathname={pathname}
              color={currentColor}
            />
          );
        })}
      </div>
    </section>
  );
};