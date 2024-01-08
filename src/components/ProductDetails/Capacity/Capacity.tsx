import { FC } from 'react';
import './Capacity.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  capacity: string;
};

export const Capacity: FC<Props> = ({ to, capacity }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'capacity__button', {
          'capacity__button--active': isActive,
        }
      )}
    >
      {capacity}
    </NavLink>
  );
};