import {
  FC,
  useState,
  useEffect,
} from 'react';
import { BigSlider } from '@components/BigSlider/BigSlider';
import { Product } from '@/types/Product';
import { getNew, getHot } from '@api/requests';
import { HomeSlider } from '@/components/Slider/Slider';
import { ShopBy } from '@/components/ShopBy/ShopBy';

export const HomePage: FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [hotProducts, setHotProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const getProducts  = async () => {
    try {
      setLoading(true);
      setError(false);

      const [
        newProducts,
        hotProducts,
      ] = await Promise.all([getNew(), getHot()]);

      setNewProducts(newProducts);
      setHotProducts(hotProducts);
    } catch {
      setError(true);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <article className="HomePage">
      <h1 className="HomePage__title">
        Welcome to Nice Gadgets store!
      </h1>
      <BigSlider />
      <HomeSlider
        title="Brand new models"
        products={newProducts}
        isLoading={isLoading}
        isError={isError}
      />
      <ShopBy />
      <HomeSlider
        title="Hot prices"
        products={hotProducts}
        isLoading={isLoading}
        isError={isError}
      />
    </article>
  );
}