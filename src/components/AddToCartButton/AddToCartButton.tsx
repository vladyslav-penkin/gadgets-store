import { FC } from 'react';
import classNames from 'classnames';
import './AddToCartButton.scss';

type Props = {
  isAddedToCart: boolean;
  onToggleCart?: () => void;
};

export const AddToCartButton: FC<Props> = ({
  isAddedToCart,
  onToggleCart,
}) => {
  return (
    <button
      onClick={onToggleCart}
      className={classNames(
        'card-button', {
          'card-button--active': isAddedToCart,
        }
      )}
    >
      {isAddedToCart ? 'Added' : 'Add to cart'}
    </button>
  );
};