import { FC } from 'react';
import './CardImage.scss';

type Props = {
  image: string;
  name: string;
};

export const CardImage: FC<Props> = ({ image, name }) => {
  return (
    <img
      className="card__image"
      src={image}
      alt={name}
    />
  );
};