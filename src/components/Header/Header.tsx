import {
  FC,
  useState,
} from 'react';
import '@components/Header/Header.scss';
import {
  useLocaleStorageContext,
} from '@hooks/useLocaleStorageContext';
import { useTheme } from '@hooks/useTheme';
import { ThemeButton } from '@components/Header/ThemeButton/ThemeButton';
import { IconLink } from '@components/Header/IconLink/IconLink';
import { NavbarList } from '@components/Header/NavbarList/NavbarList';
import { Logo } from '@components/Logo/Logo';
import { BurgerMenu } from '@components/Header/BurgerMenu/BurgerMenu';
import { MenuToggler } from '@components/Header/MenuToggler/MenuToggler';

export const Header: FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false); 
  const {
    themeIcons: {
      logoPath,
      favoriteIcon,
      shoppingBagIcon,
    }
  } = useTheme();
  const { cartItems, favorites } = useLocaleStorageContext();

  const toggleMenu = () => {
    setIsBurgerOpen(prev => !prev);
  };

  return (
    <>
      <header className="header">
        <section className="header__left-side">
          <div className="header__logo">
            <Logo src={logoPath} />
          </div>

          <NavbarList />
        </section>
        <section className="header__right-side">
          <ThemeButton />

          <IconLink
            to="favorites"
            src={favoriteIcon}
            alt="IconLink-favorites"
            count={favorites.length}
            className='header__case'
          />
          <IconLink
            to="cart"
            src={shoppingBagIcon}
            alt="IconLink-cart"
            count={cartItems.length}
            className='header__case'
          />
          <MenuToggler
            isOpen={isBurgerOpen}
            toggleMenu={toggleMenu}
          />
        </section>
      </header>
      <BurgerMenu
        isOpen={isBurgerOpen}
        toggleMenu={toggleMenu}
      />
    </>
  );
};