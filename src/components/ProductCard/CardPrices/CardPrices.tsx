import { FC } from 'react';
import './CardPrices.scss';

type Props = {
  currentPrice: number;
  fullPrice: number;
};

export const CardPrices: FC<Props> = ({ currentPrice, fullPrice }) => {
  return (
    <div className="card__prices">
      <h1 className="card__price">{`$${currentPrice}`}</h1>
      <h1 className="card__price card__price--discount">
        {`$${fullPrice}`}
      </h1>
    </div>
  );
}