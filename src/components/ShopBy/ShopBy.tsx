import {
  FC,
  useState,
  SetStateAction,
} from 'react';
import './ShopBy.scss';
import { CategoryCard } from '@components/CategoryCard/CategoryCard'; 
import {
  CategoryCardSkeletons,
} from '@components/CategoryCardSkeletons/CategoryCardSkeletons';
import {
  BASE_URL,
  getProducts,
  RequestParamsResult,
} from '@api/requests';
import { ProductType } from '@/types/ProductType';
import { useFetch } from '@/hooks/useFetch';

export const ShopBy: FC = () => {
  const [phone, setPhone] = useState<RequestParamsResult>();
  const [tablet, setTablet] = useState<RequestParamsResult>();
  const [access, setAccess] = useState<RequestParamsResult>();

  const categories = [
    { 
      link: '/phones', 
      image: `category_phones.jpg`, 
      title: 'Mobile phones', 
      amount: phone?.models || 0,
    },
    { 
      link: '/tablets', 
      image: `category_tablets.jpg`, 
      title: 'Tablets', 
      amount: tablet?.models || 0,
    },
    { 
      link: '/accessories', 
      image: `category_accessories.jpg`, 
      title: 'Accessories', 
      amount: access?.models || 0,
    },
  ];

  const fetchData = async (
    productType: ProductType,
    setter: React.Dispatch<SetStateAction<RequestParamsResult | undefined>>,
  ) => {
    const response = await getProducts(200, 1, [productType]);
    setter(response);
  };

  const { isLoading, isError } = useFetch(async () => {
    await Promise.all([
      fetchData(ProductType.PHONES, setPhone),
      fetchData(ProductType.TABLETS, setTablet),
      fetchData(ProductType.ACCESSORIES, setAccess),
    ]);
  }, []);

  return (
    <article className="shop-by-category">
      <h1 className="shop-by-category__title">
        Shop by category
      </h1>
      <section className="shop-by-category__categories">
        {isLoading && [1, 2, 3].map((skeleton: number) => (
          <CategoryCardSkeletons key={skeleton} isError={isError} />
        ))}

        {!isLoading && categories.map((category) => (
          <CategoryCard
            key={category.link}
            link={category.link}
            image={`${BASE_URL}/img/${category.image}`}
            title={category.title}
            amount={category.amount}
          />
        ))}
      </section>
    </article>
  );
};