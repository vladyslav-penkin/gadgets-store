import { useCallback } from 'react';
import {
  useLocaleStorage,
} from '@hooks/useLocaleStorage';
import { Product } from '@/types/Product';

type FavoriteValues = [
  Product[],
  (product: Product) => void,
  (productId: string) => void,
  (productId: string) => boolean,
];

export const useFavorites = (): FavoriteValues  => {
  const [favorites, setFavorites] = useLocaleStorage<Product[]>(
    'favorites',
    [],
  );

  const addToFavorites = useCallback(
    (product: Product) => {
      setFavorites((prev: Product[]) => (
        [...prev, product]
      ));
    }, [setFavorites],
  );

  const removeFromFavorites = useCallback(
    (productId: string) => {
      setFavorites((prev: Product[]) => (
        prev.filter((product: Product) => (
          product.phoneId !== productId
        ))
      ));
    }, [setFavorites],
  );

  const isIncludesInFavorites = useCallback(
    (productId: string) => {
      return favorites.some((favorite: Product) => (
        favorite.phoneId === productId
      ))
    }, [favorites],
  );

  return [
    favorites,
    addToFavorites,
    removeFromFavorites,
    isIncludesInFavorites,
  ];
};