import { FC, useMemo } from 'react';
import './ProductDetails.scss';
import { ProductType } from '@/types/ProductType';
import { ProductColors } from '@components/ProductDetails/ProductColors/ProductColors';
import { ProductSlider } from '@components/ProductSlider/ProductSlider';
import { ProductCapacity } from '@components/ProductDetails/ProductCapacity/ProductCapacity';
import { ProductPrice } from '@components/ProductDetails/ProductPrice/ProductPrice';
import { CardProperty } from '@components/CardProperty/CardProperty';
import { CardButtons } from '@components/CardButtons/CardButtons';
import {
  useLocaleStorageContext
} from '@hooks/useLocaleStorageContext';
import { Product } from '@/types/Product';
import { Phone } from '@/types/Phone';

type Props = {
  product: Phone;
  productShortInfo: Product;
  productType: ProductType;
};

export const ProductDetails: FC<Props> = ({
  product,
  productShortInfo,
  productType,
}) => {
  const {
    id,
    namespaceId,
    colorsAvailable,
    capacityAvailable,
    capacity,
    images,
    priceRegular,
    priceDiscount,
  } = product;

  const {
    isIncludesInCart,
    isIncludesInFavorites,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
  } = useLocaleStorageContext();

  const isAddedToCart = isIncludesInCart(id);
  const isItemFavorite = isIncludesInFavorites(id);

  const toggleCart = () => {
    isAddedToCart
      ? removeFromCart(productShortInfo.phoneId)
      : addToCart({ ...productShortInfo, quantity: 1 });
  }

  const toggleFavorite = () => {
    isItemFavorite
      ? removeFromFavorites(productShortInfo.phoneId)
      : addToFavorites(productShortInfo);
  };

  const properties = useMemo(() => {
    return {
      Screen: product.screen,
      Resolution: product.resolution,
      Processor: product.processor,
      RAM: product.ram,
    };
  }, [product.screen, product.resolution, product.processor, product.ram]);

  return (
    <article className="productDetails">
      <ProductSlider productImages={images} />

      <section className="productDetails__container">
        <ProductColors
          id={namespaceId}
          productId={productShortInfo.id}
          colors={colorsAvailable}
          capacity={capacity}
          productType={productType}
        />
        <ProductCapacity
          productType={productType}
          capacities={capacityAvailable}
        />
        <ProductPrice
          actualPrice={priceDiscount}
          defaultPrice={priceRegular}
        />

        <div className="productDetails__buttons">
          <CardButtons
            isAddedToCart={isAddedToCart}
            isItemFavorite={isItemFavorite}
            onToggleCart={toggleCart}
            onToggleFavorite={toggleFavorite}
          />
        </div>

        {Object.entries(properties).map(([key, value]) => (
          <CardProperty 
            key={key} 
            label={key} 
            value={value}
            className="productDetails"
          />
        ))}
      </section>
    </article>
  );
};