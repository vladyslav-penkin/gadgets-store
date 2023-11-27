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
      <div className="category-card__link">
        <Link
          to={link}
        >
          <img
            className="category-card__image"
            src={image}
            alt={title}
          />
        </Link>
      </div>
      <Link
        to={link}
        className="category-card__title"
      >
        {title}
      </Link>
      <p className="category-card__amount">
         {`${amount} models`}
      </p>
    </section>
  );
};