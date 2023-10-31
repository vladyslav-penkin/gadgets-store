import { 
  FC,
  useState,
  useEffect, 
  useMemo,
  useCallback,
} from 'react';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import { ProductType } from '../../types/ProductType';
import { Container } from '@components/Container/Container';
import { LinkLine } from '@components/LinkLine/LinkLine';
import { Product } from '@/types/Product';
import { BASE_URL, get } from '@api/requests';
import { BackToButton } from '@/components/BackToButton/BackToButton';

type Props = {
  productType: ProductType;
};

export const ProductPage: FC<Props> = ({
  productType,
})  => {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const { itemCard } = useParams();

  const getCurrentProduct = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      setProduct(
        await get(`${BASE_URL}/products/${itemCard}`)
      );
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [itemCard]);

  useEffect(() => {
    getCurrentProduct();
  }, [itemCard]);

  const linkLine = useMemo(() => {
    return [
      {
        title: productType,
        link: `/${productType}`,
      },
      {
        title: product?.name || '',
        link: `/${productType}/${itemCard}`
      }
    ];
  }, [itemCard, product, productType]);

  return (
    <Container>
      <LinkLine titles={linkLine} />
      <BackToButton to={`/${productType}`} />
      <h1 className="product__name">
        {!isError ? (
          isLoading ? 'Loading...' : product?.name
        ) : (
          'Something went wrong'
        )}
      </h1>
    </Container>
  );
}