import { FC } from 'react';
import './ProductSliderBullet.scss';
import classNames from 'classnames';
import { BASE_URL } from '@api/requests';

type Props = {
  image: string;
  isActive: boolean;
  onClick: () => void;
};

export const ProductSliderBullet: FC<Props> = ({
  image,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        'productSlider__bullet', {
          'productSlider__bullet--active': isActive,
        }
       )}
      onClick={onClick}
    >
      <div
        className="productSlider__bullet-image"
        style={{ backgroundImage: `url(${BASE_URL}/${image})` }}
      ></div>
    </button>
  );
};