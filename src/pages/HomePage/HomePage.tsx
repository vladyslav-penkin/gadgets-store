import {
  FC,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { BigSlider } from '@components/BigSlider/BigSlider';
import { Product } from '@/types/Product';
import { getNew, getHot } from '@api/requests';
import { HomeSlider } from '@components/Slider/Slider';
import { ShopBy } from '@components/ShopBy/ShopBy';
import { Container } from '@components/Container/Container';

export const HomePage: FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [hotProducts, setHotProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const [
        newProducts,
        hotProducts,
      ] = await Promise.all([getNew(), getHot()]);

      setNewProducts(newProducts);
      setHotProducts(hotProducts);
      setLoading(false);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <article className="HomePage">
      <Container>
        <h1 className="HomePage__title">
          Welcome to Nice Gadgets store!
        </h1>
      </Container>
      <section className="HomePage__big-slider">
        <BigSlider />
      </section>
      <Container>
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
      </Container>
    </article>
  );
}