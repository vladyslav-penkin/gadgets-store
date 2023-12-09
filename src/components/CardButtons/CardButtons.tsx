import { FC } from 'react';
import './CardButtons.scss';
import { AddToCartButton } from '@components/AddToCartButton/AddToCartButton';
import { LikeButton } from '@components/LikeButton/LikeButton';

type Props = {
  isAddedToCart: boolean;
  isItemFavorite: boolean;
  onToggleCart: () => void;
  onToggleFavorite: () => void;
};

export const CardButtons: FC<Props> = ({ 
  isAddedToCart, 
  isItemFavorite, 
  onToggleCart,
  onToggleFavorite,
}) => {
  return (
    <div className="card__buttons">
      <AddToCartButton
        isAddedToCart={isAddedToCart}
        onToggleCart={onToggleCart}
      />
      <LikeButton
        isItemFavorite={isItemFavorite}
        onLike={onToggleFavorite}
      />
    </div>
  );
};