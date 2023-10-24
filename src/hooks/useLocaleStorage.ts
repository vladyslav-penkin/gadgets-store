import { useState, useEffect } from 'react';

export const useLocaleStorage = <T>(
  key: string,
  initialValue: T,
  ): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(
    JSON.parse(localStorage.getItem(key) || 'null') || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}