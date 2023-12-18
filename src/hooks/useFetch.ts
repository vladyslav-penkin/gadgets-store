import { useState, useEffect } from 'react';

export const useFetch = (
  callback: () => void,
  dependencies: unknown[],
) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
  
        await callback();
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { isLoading, isError };
};