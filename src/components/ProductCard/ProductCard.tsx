import {
  FC,
  memo,
} from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { useLocaleStorageContext } from '@hooks/useLocaleStorageContext';
import { Product } from '@/types/Product';
import { BASE_URL } from '@api/requests';
import { CardButtons } from '@components/CardButtons/CardButtons';
import { CardPrices } from '@components/ProductCard/CardPrices/CardPrices';
import { CardImage } from '@components/ProductCard/CardImage/CardImage';
import { CardProperty } from '@components/CardProperty/CardProperty';

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
  
    const isAddedToCart = isIncludesInCart(phoneId);  
    const isItemFavorite = isIncludesInFavorites(phoneId);
  
    const toggleCart = () => {
      isAddedToCart
        ? removeFromCart(phoneId)
        : addToCart({ ...product, quantity: 1 });
    };
  
    const toggleFavorites = () => {
      isItemFavorite
        ? removeFromFavorites(phoneId)
        : addToFavorites(product);
    };

    const inces = screen.split(' ')[0];
    const characteristics = {
      Screen: inces,
      Capacity: capacity,
      RAM: ram,
    };
  
    return (
      <div className="card">
        <Link to={`/${category}/${phoneId}`} className="card__link">
          <CardImage image={`${BASE_URL}/${image}`} name={name} />
          <h1 className="card__title">{name}</h1>
        </Link>

        <CardPrices
          currentPrice={price}
          fullPrice={fullPrice}
        />

        <div className="card__properties">
          {Object.entries(characteristics).map(([key, value]) => (
            <CardProperty 
              key={key} 
              label={key} 
              value={value}
              className="card" 
            />
          ))}
        </div>

        <CardButtons
          isAddedToCart={isAddedToCart}
          isItemFavorite={isItemFavorite}
          onToggleCart={toggleCart}
          onToggleFavorite={toggleFavorites}
        />
      </div>
    );
  },
);