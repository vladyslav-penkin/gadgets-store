import { FC, createContext } from 'react';
import { useCart } from '@hooks/useCart';
import { useFavorites } from '@hooks/useFavorites';
import { CartItem } from '@/types/CartItem';
import { Product } from '@/types/Product';
import { QuantityMethods } from '@/types/QuantityMethods';

interface LocaleStorageContextValue {
  cartItems: CartItem[],
  addToCart: (product: CartItem) => void,
  removeFromCart: (itemId: string) => void,
  isIncludesInCart: (productId: string) => boolean,
  changeQuantity: (
    itemId: string,
    method: QuantityMethods,
  ) => void,
  getTotalPrice: () => number,
  getTotalQuantity: () => number,
  clearCart: () => void,
  favorites: Product[],
  addToFavorites: (product: Product) => void,
  removeFromFavorites: (productId: string) => void,
  isIncludesInFavorites: (productId: string) => boolean,
}

export const LocaleStorageContext = createContext<
LocaleStorageContextValue
>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isIncludesInCart: () => false,
  changeQuantity: () => {},
  getTotalPrice: () => 0,
  getTotalQuantity: () => 0,
  clearCart: () => {},
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isIncludesInFavorites: () => false,
});

interface Props {
  children: React.ReactNode;
}

export const LocaleStorageProvider: FC<Props> = ({ children }) => {
  const [
    cartItems,
    addToCart,
    removeFromCart,
    isIncludesInCart,
    changeQuantity,
    getTotalPrice,
    getTotalQuantity,
    clearCart,
  ] = useCart();

  const [
    favorites,
    addToFavorites,
    removeFromFavorites,
    isIncludesInFavorites,
  ] = useFavorites();

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    isIncludesInCart,
    changeQuantity,
    getTotalPrice,
    getTotalQuantity,
    clearCart,
    favorites,
    addToFavorites,
    removeFromFavorites,
    isIncludesInFavorites,
  };

  return (
    <LocaleStorageContext.Provider value={contextValue}>
      {children}
    </LocaleStorageContext.Provider>
  );
}