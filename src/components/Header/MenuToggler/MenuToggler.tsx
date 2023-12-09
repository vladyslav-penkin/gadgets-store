import { FC } from 'react';
import '@components/Header/MenuToggler/MenuToggler.scss';
import classNames from 'classnames';

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const MenuToggler: FC<Props> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className={classNames(
        'header__burger',
        'burger', {
          'burger--opened': isOpen,
        }
      )}
      onClick={toggleMenu}
    >
      <div className="burger__container">
        <span className="burger__line burger__line--1"></span>
        <span className="burger__line burger__line--2"></span>
        <span className="burger__line burger__line--3"></span>
      </div>
    </button>
  );
};