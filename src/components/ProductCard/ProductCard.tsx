import {
  FC,
  memo,
  useCallback,
  useMemo,
} from 'react';
import { Link } from 'react-router-dom';
import { useLocaleStorageContext } from '@hooks/useLocaleStorageContext';
import { AddToCartButton } from '@components/AddToCartButton/AddToCartButton';
import { LikeButton } from '@components/LikeButton/LikeButton';
import { Product } from '@/types/Product';
import { BASE_URL } from '@api/requests';

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = memo(
  ({ product }) => {
    const {
      name,
      price,
      fullPrice,
      screen,
      capacity,
      ram,
      phoneId,
      category,
      image,
    } = product;
  
    const {
      addToCart,
      removeFromCart,
      addToFavorites,
      removeFromFavorites,
      isIncludesInCart,
      isIncludesInFavorites,
    } = useLocaleStorageContext();

    const inces = screen.split(' ')[0];
  
    const isAddedToCart = useMemo(() => {
      return isIncludesInCart(phoneId);
    }, [isIncludesInCart, phoneId]);
  
    const isItemFavorite = useMemo(() => {
      return isIncludesInFavorites(phoneId);
    }, [isIncludesInFavorites, phoneId]);
  
    const handleAddToCart = useCallback(
      () => {
        if (isAddedToCart) {
          removeFromCart(phoneId);
        } else {
          addToCart({
            ...product,
            quantity: 1,
          });
        }
      }, [
        addToCart, 
        isAddedToCart, 
        phoneId, 
        product, 
        removeFromCart,
      ],
    );
  
    const handleAddToFavorites = useCallback(
      () => {
        if (isItemFavorite) {
          removeFromFavorites(phoneId);
        } else {
          addToFavorites(product);
        }
      }, [
        addToFavorites, 
        isItemFavorite, 
        phoneId, 
        product, 
        removeFromFavorites,
      ],
    );
  
    const characteristics = useMemo(() => {
      return {
        Screen: inces,
        Capacity: capacity,
        RAM: ram,
      };
    }, [inces, capacity, ram]);
  
    return (
      <div
        className="card"
      >
        <Link
          to={`/${category}/${phoneId}`}
          className="card__link"
        >
          <img
            className="card__image"
            src={`${BASE_URL}/${image}`}
            alt={name}
          />
          <h1 className="card__title">{name}</h1>
        </Link>

        <div className="card__prices">
          <h1 className="card__price">{`$${price}`}</h1>
          <h1 className="card__price card__price--discount">
            {`$${fullPrice}`}
          </h1>
        </div>

        <div className="card__properties">
          {Object.entries(characteristics).map(([key, value]) => (
            <div className="card__property" key={key}>
              <p className="card__property-key">{key}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
        <div className="card__buttons">
          <AddToCartButton
            isAddedToCart={isAddedToCart}
            onAddToCart={handleAddToCart}
          />
          <LikeButton
            isItemFavorite={isItemFavorite}
            onLike={handleAddToFavorites}
          />
        </div>
      </div>
    );
  },
);