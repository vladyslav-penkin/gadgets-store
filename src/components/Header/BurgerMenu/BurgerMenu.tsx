import { FC, memo } from 'react';
import './BurgerMenu.scss';
import { useTheme } from '@/hooks/useTheme';
import {
  useLocaleStorageContext,
} from '@/hooks/useLocaleStorageContext';
import { IconLink } from '@components/Header/IconLink/IconLink';
import { HeaderLink } from '@components/Header/HeaderLink';
import { NavList } from '@/types/NavList';
import classNames from 'classnames';

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu: FC<Props> = memo(({
  isOpen,
  toggleMenu,
}) => {

  const { themeIcons: {
    favoriteIcon,
    shoppingBagIcon,
  }} = useTheme();
  const { cartItems, favorites } = useLocaleStorageContext();
  const category = Object.entries(NavList);
  
  return (
    <menu className={classNames(
      'menu', {
        'menu--opened': isOpen,
       }
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
        <IconLink
          to="favorites"
          src={favoriteIcon}
          alt="IconLink-favorites"
          count={favorites.length}
          className='menu__case'
          clickFunc={toggleMenu}
        />
        <IconLink
          to="cart"
          src={shoppingBagIcon}
          alt="IconLink-cart"
          count={cartItems.length}
          className='menu__case'
          clickFunc={toggleMenu}
        />
      </div>
    </menu>
  );
});