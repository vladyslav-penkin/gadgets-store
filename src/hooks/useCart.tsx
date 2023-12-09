import { useCallback } from 'react';
import {
  useLocaleStorage,
} from '@hooks/useLocaleStorage';
import { CartItem } from '@/types/CartItem';
import { QuantityMethods } from '@/types/QuantityMethods';

type CartValues = [
  CartItem[],
  (product: CartItem) => void,
  (itemId: string) => void,
  (productId: string) => boolean,
  (itemId: string, method: QuantityMethods) => void,
  () => number,
  () => number,
  () => void,
];

export const useCart = (): CartValues  => {
  const [cartItems, setCartItems] = useLocaleStorage<CartItem[]>(
    'cart',
    [],
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, [setCartItems]);

  const addToCart = useCallback((product: CartItem) => {
    setCartItems((prev: CartItem[]) => (
      [...prev, product]
    ));
  }, [setCartItems]);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prev: CartItem[]) => (
      prev.filter((product: CartItem) => (
        product.phoneId !== productId
      ))
    ));
  }, [setCartItems]);

  const IsIncludesInCart = useCallback((productId: string) => {
    return cartItems.some((cartItem: CartItem) => (
      cartItem.phoneId === productId
     ))
  }, [cartItems]);

  const changeQuantity = useCallback((
    itemId: string,
    method: QuantityMethods,
  ) => {
    setCartItems((prev: CartItem[]) => (
      prev.map((cartItem: CartItem) => (
        cartItem.phoneId === itemId
          ? {
            ...cartItem,
            quantity: method === 'increase'
              ? cartItem.quantity + 1
              : cartItem.quantity - 1,
          }
          : cartItem
      ))
    ));
  }, [setCartItems]);

  const getTotalPrice = useCallback(() => (
    cartItems.reduce((acc, curr) => (
    acc + (curr.price * curr.quantity) 
    ), 0) 
  ), [cartItems]);

  const getTotalQuantity = useCallback(() => (
    cartItems.reduce((acc, curr) => (
      acc + curr.quantity
    ), 0)
  ), [cartItems]);

  return [
    cartItems,
    addToCart,
    removeFromCart,
    IsIncludesInCart,
    changeQuantity,
    getTotalPrice,
    getTotalQuantity,
    clearCart,
  ];
};