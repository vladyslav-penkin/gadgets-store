import { FC, useCallback, useMemo } from 'react';
import './ProductDetails.scss';
import { ProductType } from '@/types/ProductType';
import { ProductColors } from '@components/ProductDetails/ProductColors/ProductColors';
import { ProductSlider } from '@components/ProductSlider/ProductSlider';
import { ProductCapacity } from '@components/ProductDetails/ProductCapacity/ProductCapacity';
import { ProductPrice } from '@components/ProductDetails/ProductPrice/ProductPrice';
import { AddToCartButton } from '@components/AddToCartButton/AddToCartButton';
import { LikeButton } from '@components/LikeButton/LikeButton';
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

  const handleAddToCart = useCallback(() => {
    if (isAddedToCart) {
      removeFromCart(productShortInfo.phoneId);
    } else {
      addToCart({
        ...productShortInfo,
        quantity: 1,
      })
    }
  }, [
    addToCart, 
    isAddedToCart, 
    productShortInfo, 
    removeFromCart,
  ]);

  const handleAddToFavorite = useCallback(() => {
    if (isItemFavorite) {
      removeFromFavorites(productShortInfo.phoneId);
    } else {
      addToFavorites(productShortInfo)
    }
  }, [
    addToFavorites, 
    isItemFavorite, 
    productShortInfo, 
    removeFromFavorites
  ]);

  const properties = useMemo(() => {
    return {
      Screen: product.screen,
      Resolution: product.resolution,
      Processor: product.processor,
      RAM: product.ram,
    };
  }, [product]);

  return (
    <article className="productDetails">
      <ProductSlider productImages={images} />
      <section className="productDetails__container">
        <ProductColors
          id={namespaceId}
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
          <AddToCartButton
            isAddedToCart={isAddedToCart}
            onAddToCart={handleAddToCart}
          />
          <LikeButton
            isItemFavorite={isItemFavorite} 
            onLike={handleAddToFavorite}
          />
        </div>
        {Object.entries(properties).map(([key, value]) => (
          <div className="productDetails__property" key={key}>
            <p className="productDetails__property-key">{key}</p>
            <p className="productDetails__property-value">{value}</p>
          </div>
        ))}
      </section>
    </article>
  );
};