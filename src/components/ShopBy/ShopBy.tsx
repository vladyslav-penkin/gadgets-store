import {
  FC,
  useState,
  useEffect,
} from 'react';
import './ShopBy.scss';
import { CategoryCard } from '@components/CategoryCard/CategoryCard'; 
import {
  BASE_URL,
  getProducts,
  RequestParamsResult,
} from '@api/requests';
import { ProductType } from '@/types/ProductType';
import { CategoryCardSkeletons } from '../CategoryCardSkeletons/CategoryCardSkeletons';

export const ShopBy: FC = () => {
  const [phone, setPhone] = useState<RequestParamsResult>();
  const [tablet, setTablet] = useState<RequestParamsResult>();
  const [access, setAccess] = useState<RequestParamsResult>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const getDataFromServer = async() => {
    setLoading(true);
    setError(false);
    try {
      setPhone(
        await getProducts(
          200,
          1,
          [ProductType.PHONES]
        ),
      );
      setTablet(
        await getProducts(
          200,
          1,
          [ProductType.TABLETS]
        ),
      );
      setAccess(
        await getProducts(
          200,
          1,
          [ProductType.ACCESSORIES]
        )
      )
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <article
      className="shop-by-category"
    >
      <h1 className="shop-by-category__title">
        {isError ? 'Something went wrong' : 'Shop by category'}
      </h1>
      <section
        className="shop-by-category__categories"
      >
        {isLoading && (
          <>
            <CategoryCardSkeletons />
            <CategoryCardSkeletons />
            <CategoryCardSkeletons />
          </>
        )}
        {!isLoading &&  (
          <>
            <CategoryCard
              link="/phones"
              image={`${BASE_URL}/img/category_phones.jpg`}
              title="Mobile phones"
              amount={phone?.models || 0}
            />
            <CategoryCard
              link="/tablets"
              image={`${BASE_URL}/img/category_tablets.jpg`}
              title="Tablets"
              amount={tablet?.models || 0}
            />
            <CategoryCard
              link="/accessories"
              image={`${BASE_URL}/img/category_accessories.jpg`}
              title="Accessories"
              amount={access?.models || 0}
            />
          </>
        )}
      </section>
    </article>
  );
};