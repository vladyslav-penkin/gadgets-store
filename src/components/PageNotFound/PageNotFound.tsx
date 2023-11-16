import { FC } from 'react';
import './PageNotFound.scss';
import { Link } from 'react-router-dom';

type Props = {
  image: string;
  title: string;
  link: string;
  button: string;
};

export const PageNotFound: FC<Props> = ({
  image,
  title,
  link,
  button,
}) => {
  return (
    <section className="pageNotFound">
      <h3 className="pageNotFound__title">{title}</h3>
      <img
        className="pageNotFound__image"
        src={image}
        alt={title}
      />
      <Link
        to={`/${link}`}
        className="pageNotFound__button"
      >
        {button}
      </Link>
    </section>
  );
};