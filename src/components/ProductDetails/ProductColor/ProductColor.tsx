import { FC } from 'react';
import './ProductColor.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Colors } from '@/types/Colors';

type Props = {
  pathname: string;
  color: string;
};

const colors = {
  [Colors.Midnight]: '#535150',
  [Colors.MidnightGreen]: '#4e5851',
  [Colors.White]: '#fff',
  [Colors.Green]: '#27ae60',
  [Colors.Purple]: '#b8afe6',
  [Colors.Red]: '#ba0c2e',
  [Colors.Yellow]: '#ffe681',
  [Colors.Black]: '#000000',
  [Colors.Pink]: '#dfccb7',
  [Colors.Gold]: '#dfccb7',
  [Colors.Blue]: 'blue',
  [Colors.Silver]: '#e4e4e2',
  [Colors.SpaceBlack]: '#323233',
  [Colors.SpaceGray]: '#535150',
  [Colors.StarLight]: '#535150',
  [Colors.Coral]: '#ee7762',
  [Colors.RoseGold]: '#A295A7',
  [Colors.SkyBlue]: '#D8D8F6',
  [Colors.Graphite]: '#C4C4E0',
  [Colors.SierraBlue]: '#BDB7CF',
}

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