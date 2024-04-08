import { useState, useEffect } from 'react';

export const useResize = () => {
  const [isSmall, setIsSmall] = useState<boolean>(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 640 ? true : false)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return isSmall;
};