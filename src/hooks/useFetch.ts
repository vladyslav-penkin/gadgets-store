import { useState, useEffect } from 'react';

type Callback = () => void;

interface RequestResult {
  isLoading: boolean;
  isError: boolean;
}

export const useFetch = (
  tryFunc: Callback,
  catchFunc: Callback,
  finallyFunc: Callback,
  dependencies: unknown[],
): RequestResult => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
  
        await tryFunc?.();
      } catch (error) {
        await catchFunc?.();
        setError(true);
        console.error(error);
      } finally {
        await finallyFunc?.();
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { isLoading, isError };
};