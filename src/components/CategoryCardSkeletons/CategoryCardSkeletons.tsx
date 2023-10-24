import { FC } from 'react';
import '@components/CategoryCardSkeletons/CategoryCardSkeletons.scss';

export const CategoryCardSkeletons: FC = () => {
  return (
    <article className="category-card skeleton-card">
      <div className="skeleton-card-image"></div>
      <div className="skeleton-card-title"></div>
      <div className="skeleton-card-amount"></div>
    </article>
  );
};