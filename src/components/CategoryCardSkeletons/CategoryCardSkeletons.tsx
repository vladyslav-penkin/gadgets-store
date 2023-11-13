import { FC } from 'react';
import '@components/CategoryCardSkeletons/CategoryCardSkeletons.scss';
import classNames from 'classnames';

type Props = {
  isError: boolean;
};

export const CategoryCardSkeletons: FC<Props> = ({
  isError,
}) => {
  return (
    <article className={classNames(
      'category-card',
      'skeleton-card', {
        'skeleton-card--error': isError,
      }
    )}>
      <div className={classNames(
        'skeleton-card-image', {
          'skeleton-card-image--error': isError,
        }
      )}></div>
      <div className={classNames(
        'skeleton-card-title', {
          'skeleton-card-title--error': isError,
        }
      )}></div>
      <div className={classNames(
        'skeleton-card-amount', {
          'skeleton-card-amount--error': isError,
        }
      )}></div>
    </article>
  );
};