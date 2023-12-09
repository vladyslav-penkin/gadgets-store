import { FC, memo } from 'react';
import './NavbarList.scss';
import { NavList } from '@/types/NavList';
import { HeaderLink } from '@components/Header/HeaderLink';

export const NavbarList: FC = memo(() => {
  const categories = Object.entries(NavList);
  
  return (
    <nav className="header__nav nav">
      <ul className="nav__panel">
        {categories.map(([title, link]) => (
          <li key={title} className="nav__item">
            <HeaderLink
              to={link}
              title={title}
              className="nav__link"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
});