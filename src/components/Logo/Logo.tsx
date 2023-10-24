import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  src: string;
};

export const Logo: FC<Props> = ({ src }) => {
  return (
    <Link
      to="/"
      className="header__logo logo"
    >
      <img
        src={src}
        alt="Logo"
        className="logo__icon"
      />
    </Link>
  );
}