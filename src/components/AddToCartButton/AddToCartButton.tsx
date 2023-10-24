import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  isAddedToCart: boolean;
  onAddToCart?: () => void;
};

export const AddToCartButton: FC<Props> = ({
  isAddedToCart,
  onAddToCart,
}) => {
  return (
    <button
      onClick={onAddToCart}
      className={classNames(
        'card-button',
        {
          'card-button--active': isAddedToCart,
        }
      )}
    >
      {isAddedToCart ? 'Added' : 'Add to cart'}
    </button>
  );
};