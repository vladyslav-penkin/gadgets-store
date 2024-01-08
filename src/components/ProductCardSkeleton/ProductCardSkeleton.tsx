import { FC } from 'react';
import './ProductCardSkeleton.scss';

export const ProductCardSkeleton: FC = () => {
  return (
    <div className='card-skeleton'>
      <div className="card-skeleton__image"></div>
      {[1, 2].map((num: number) => (
        <div className={`card-skeleton__title card-skeleton__title--${num}`}></div>
      ))}

      <div className="card-skeleton__prices"></div>
      <div className="card-skeleton__properties">
        {[1, 2, 3].map((property: number) => (
          <div className="card-skeleton__property" key={property}></div>
        ))}
      </div>

      <div className="card-skeleton__buttons">
        {[1, 2].map((button: number) => (
          <div className={`card-skeleton__button${button}`}></div>
        ))}
      </div>
    </div>
  );
};