import { useContext } from 'react';
import {
  LocaleStorageContext,
} from '@contexts/LocaleStorageContext';

export const useLocaleStorageContext = () => {
  const localeStorageContext = useContext(LocaleStorageContext);

  return localeStorageContext;
}