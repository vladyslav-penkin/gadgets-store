import { FC } from 'react';
import '@components/Slider/Slider.scss';
import { useTheme } from '@hooks/useTheme';
import { Product } from '@/types/Product';
import Slider from 'react-slick';
import { ProductCard } from '@components/ProductCard/ProductCard';
import { ProductCardSkeleton } from '../ProductCardSkeleton/ProductCardSkeleton';

type Props = {
  title: string;
  products: Product[];
  isLoading: boolean;
  isError: boolean;
};

export const HomeSlider: FC<Props> = ({
  title,
  products,
  isLoading,
  isError,
}) => {
  const {
    themeIcons: {
      arrowLeftIcon,
      arrowRightIcon,
    }
  } = useTheme();

  const arrowLeft = (
    <div>
      <img src={arrowLeftIcon} />
    </div>
  );
  const arrowRight = (
    <div>
      <img src={arrowRightIcon} />
    </div>
  );

  const settingsSlider = {
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 4,
    nextArrow: arrowRight,
    prevArrow: arrowLeft,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 4800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <article
      className="slider"
    >
      <h2 className="slider__name">
        {isError ? 'Something went wrong' : title}
      </h2>

      {isLoading ? (
        <div className="slider__container">
          <Slider {...settingsSlider}>
            {[1, 2, 3, 4, 5, 6].map((product) => (
              <div className="slider__item" key={product}>
                <ProductCardSkeleton />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="slider__container">
          <Slider {...settingsSlider}>
            {products.map((product) => (
              <div className="slider__item" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </article>
  );
};