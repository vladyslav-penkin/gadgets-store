import { FC } from 'react';
import './CategoryCard.scss';
import { Link } from 'react-router-dom';

type Props = {
  link: string;
  image: string;
  title: string;
  amount: number;
};

export const CategoryCard: FC<Props> = ({
  link,
  image,
  title,
  amount,
}) => {
  return (
    <section
      className="category-card"
    >
      <Link
        to={link}
        className="category-card__link"
      >
        <img
          className="category-card__image"
          src={image}
          alt={title}
        />

        <h2 className="category-card__title">
          {title}
        </h2>
        <p className="category-card__amount">
          {`${amount} models`}
        </p>
      </Link>
    </section>
  );
};