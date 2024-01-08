import { 
  FC,
  memo,
  useState,
} from 'react';
import './ProductPage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductType } from '@/types/ProductType';
import { Product } from '@/types/Product';
import { Phone } from '@/types/Phone';
import { Container } from '@components/Container/Container';
import { LinkLine } from '@components/LinkLine/LinkLine';
import { getDetailedInfo, getRecommendations } from '@api/requests';
import { BackToButton } from '@components/BackToButton/BackToButton';
import { ProductDetails } from '@components/ProductDetails/ProductDetails';
import { getShortInfo } from '@/helpers/getShortInfo';
import { ProductDescription } from '@components/ProductDescription/ProductDescription';
import { ProductAbout } from '@components/ProductDescription/ProductAbout/ProductAbout';
import { ProductTechSpecs } from '@components/ProductDescription/ProductTechSpecs/ProductTechSpecs';
import { HomeSlider } from '@components/Slider/Slider';
import { ProductPageSkeleton } from '@pages/ProductPageSkeleton/ProductPageSkeleton';
import { useFetch } from '@hooks/useFetch';

type Props = {
  productType: ProductType;
};

export const ProductPage: FC<Props> = memo(({ productType })  => {
  const [item, setItem] = useState<Phone>();
  const navigate = useNavigate();
  const [recommended, setRecommended] = useState<Product[]>([]);
  const { itemCard } = useParams();

  const { isLoading, isError } = useFetch(
    async () => {
      const [detailedInfo, recommendedInfo] = await Promise.all([
        getDetailedInfo(itemCard || ''),
        getRecommendations(itemCard || '')
      ]);

      setItem(detailedInfo);
      setRecommended(recommendedInfo);
    }, 
    () => navigate('*'),
    () => window.scrollTo(0, 0),
    [itemCard],
  );


  const linkLine = [
    { title: productType, link: `/${productType}` },
    { title: item?.name || '', link: `/${productType}/${itemCard}` },
  ];

  const product = item
    ? { ...getShortInfo(item), category: productType }
    : null;
  
  const isProductFound = item && product;

  if (isLoading) {
    return <ProductPageSkeleton />;
  }

  return (
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
            <ProductDescription title="About">
              <ProductAbout
                description={item.description}
              />
            </ProductDescription>
            <ProductDescription title="TechSpecs">
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
  );
});