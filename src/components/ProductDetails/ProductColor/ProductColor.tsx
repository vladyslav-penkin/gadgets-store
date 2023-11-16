import { FC } from 'react';
import './ProductColor.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Colors } from '@/types/Colors';
import { colors } from '@/types/ColorsObject';

type Props = {
  pathname: string;
  color: string;
};

export const ProductColor: FC<Props> = ({
  pathname,
  color,
}) => {
  return (
    <NavLink
      to={{
        pathname,
      }}
      style={{ backgroundColor: colors[color as Colors] }}
      className={({ isActive }) => classNames(
        'colors__circles',
        {
          'colors__circles--active': isActive,
        }
      )}
    ></NavLink>
  );
};