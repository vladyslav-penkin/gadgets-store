import { FC, memo } from 'react';
import './BurgerMenu.scss';
import classNames from 'classnames';

import { useTheme } from '@hooks/useTheme';
import {
  useLocaleStorageContext,
} from '@hooks/useLocaleStorageContext';
import { IconLink } from '@components/Header/IconLink/IconLink';
import { HeaderLink } from '@components/Header/HeaderLink';
import { NavList } from '@/types/NavList';

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu: FC<Props> = memo(({ isOpen, toggleMenu }) => {
  const category = Object.entries(NavList);
  const { themeIcons: { favoriteIcon, shoppingBagIcon } } = useTheme();
  const { cartItems, favorites } = useLocaleStorageContext();

  const linkItems = [
    { to: 'favorites', src: favoriteIcon, alt: 'favorites', count: favorites.length, className: 'menu__case' },
    { to: 'cart', src: shoppingBagIcon, alt: 'cart', count: cartItems.length, className: 'menu__case' },
  ]
  
  return (
    <menu className={classNames(
      'menu',
      { 'menu--opened': isOpen }
    )}>
      <div className="menu__content">
        <ul className="menu__content-list">
          {category.map(([title, link]) => (
            <li
              key={title}
              className="menu__content-item"
              onClick={toggleMenu}
            >
              <HeaderLink
                to={link}
                title={title}
                className="menu__content-link"
              />
             </li>
          ))}
        </ul>
      </div>
      <div className="menu__footer">
        {linkItems.map(({ to, src, alt, count, className }) => (
          <IconLink
            to={to}
            src={src}
            alt={alt}
            count={count}
            className={className}
            clickFunc={toggleMenu}
          />
        ))}
      </div>
    </menu>
  );
});