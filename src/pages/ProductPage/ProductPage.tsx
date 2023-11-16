import { 
  FC,
  memo,
  useState,
  useEffect, 
  useCallback,
} from 'react';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import { ProductType } from '../../types/ProductType';
import { Container } from '@components/Container/Container';
import { LinkLine } from '@components/LinkLine/LinkLine';
import { getDetailedInfo, getRecommendations } from '@api/requests';
import { BackToButton } from '@components/BackToButton/BackToButton';
import { ProductDetails } from '@components/ProductDetails/ProductDetails';
import { Phone } from '@/types/Phone';
import { getShortInfo } from '@/helpers/getShortInfo';
import { ProductDescription } from '@components/ProductDescription/ProductDescription';
import { ProductAbout } from '@components/ProductDescription/ProductAbout/ProductAbout';
import { ProductTechSpecs } from '@components/ProductDescription/ProductTechSpecs/ProductTechSpecs';
import { HomeSlider } from '@components/Slider/Slider';
import { Product } from '@/types/Product';
import { ProductPageSkeleton } from '../ProductPageSkeleton/ProductPageSkeleton';

type Props = {
  productType: ProductType;
};

export const ProductPage: FC<Props> = memo(({
  productType,
})  => {
  const [item, setItem] = useState<Phone>();
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const { itemCard } = useParams();
  const getCurrentProduct = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const [
        detailedInfo,
        recommendedInfo,
      ] = await Promise.all([
        getDetailedInfo(itemCard || ''),
        getRecommendations(itemCard || '')
      ]);
      setItem(detailedInfo);
      setRecommended(recommendedInfo);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      scrollTo(0, 0);
    }
  }, [itemCard]);

  useEffect(() => {
    getCurrentProduct();
  }, [itemCard]);

  const linkLine = [
    {
      title: productType,
      link: `/${productType}`,
    },
    {
      title: item?.name || '',
      link: `/${productType}/${itemCard}`
    }
  ];
  const product = item ? getShortInfo(item) : null;
  const isProductFound = item && product;

  return (
    <>
      {isLoading
        ? <ProductPageSkeleton />
        : (
          <Container>
            <LinkLine titles={linkLine} />
            <BackToButton to={`/${productType}`} />
            <h1 className="product__name">
              {!isError ? product?.name : 'Something went wrong'}
            </h1>
            {isProductFound && (
              <>
                <ProductDetails
                  product={item}
                  productShortInfo={product}
                  productType={productType}
                />
                <div className="product__productDescription">
                  <ProductDescription
                    title="About"
                  >
                    <ProductAbout
                    description={item.description}
                    />
                  </ProductDescription>
                  <ProductDescription
                    title="TechSpecs"
                  >
                    <ProductTechSpecs
                      product={item}
                    />
                  </ProductDescription>
                </div>
                <HomeSlider
                  products={recommended}
                  title={'You may also like'}
                  isLoading={isLoading}
                  isError={isError}
                />
              </>
            )}
          </Container>
        )}
    </>
  );
});