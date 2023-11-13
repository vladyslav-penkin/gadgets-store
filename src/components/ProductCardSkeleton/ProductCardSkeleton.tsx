import { FC } from 'react';
import './ProductCardSkeleton.scss';
import classNames from 'classnames';

type Props = {
  isError?: boolean;
};

export const ProductCardSkeleton: FC<Props> = ({
  isError = false,
}) => {
  return (
    <div
      className={classNames(
        'card-skeleton', {
          'card-skeleton--error': isError,
        }
      )}
    >
      <div className={classNames(
        'card-skeleton__image', {
          'card-skeleton__image--error': isError,
        }
      )}></div>
      {[1, 2].map((num: number) => (
        <div className={classNames(
          'card-skeleton__title',
          `card-skeleton__title--${num}`, {
            'card-skeleton__title--error': isError,
          }
        )}></div>
      ))}

      <div className={classNames(
        'card-skeleton__prices', {
          'card-skeleton__prices--error': isError,
        }
      )}></div>
      <div className="card-skeleton__properties">
        {[1, 2, 3].map((property: number) => (
          <div
            className={classNames(
              'card-skeleton__property', {
                'card-skeleton__property--error': isError,
              }
            )}
            key={property}
          ></div>
        ))}
      </div>

      <div className="card-skeleton__buttons">
        {[1, 2].map((button: number) => (
          <div 
          className={classNames(
            `card-skeleton__button${button}`, {
              [`card-skeleton__button${button}--error`]: isError,
            }
          )}
          ></div>
        ))}
      </div>
    </div>
  );
};