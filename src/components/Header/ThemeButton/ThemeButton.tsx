import { FC } from 'react';
import '@components/Header/Header.scss';
import { useTheme } from '@hooks/useTheme';

export const ThemeButton: FC = () => {
  const {
    toggleTheme,
    themeIcons: { themeIcon },
  } = useTheme();

  return (
    <button
      className='header__case header__case--button'
      title="theme"
      onClick={() => toggleTheme()}
    >
      <img
        src={themeIcon}
        alt="theme"
        className="header__icon header__icon--button"
      />
    </button>
  );
}