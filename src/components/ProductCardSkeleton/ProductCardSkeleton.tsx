import { FC } from 'react';
import './ProductCardSkeleton.scss';

export const ProductCardSkeleton: FC = () => {
  return (
    <div
      className="card-skeleton"
    >
      <div className="card-skeleton__image"></div>
      <div className="card-skeleton__title card-skeleton__title--1"></div>
      <div className="card-skeleton__title card-skeleton__title--2"></div>

      <div className="card-skeleton__prices"></div>
      <div className="card-skeleton__properties">
        <div className="card-skeleton__property"></div>
        <div className="card-skeleton__property"></div>
        <div className="card-skeleton__property"></div>
      </div>

      <div className="card-skeleton__buttons">
        <div className="card-skeleton__button1"></div>
        <div className="card-skeleton__button2"></div>
      </div>
    </div>
  );
};