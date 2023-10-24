import { useContext } from 'react';
import { ThemeContext } from '@contexts/ThemeContext';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  return themeContext;
}