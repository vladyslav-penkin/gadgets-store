import '@components/Header/Header.scss';
import { FC, memo } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  title: string;
  className: string;
};

export const HeaderLink: FC<Props> = memo(
  ({
    to,
    title,
    className,
  }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => classNames(
          `${className}`,
          {
            [`${className}--active`]: isActive,
          }
        )}
      >
        {title}
      </NavLink>
    );
  },
);