import { FC } from 'react';
import './ProductSliderPagination.scss';
import { Swiper as SwiperType } from 'swiper/types';
import { ProductSliderBullet } from '../ProductSliderBullet/ProductSliderBullet';

type Props = {
  images: string[];
  swiperRef: SwiperType | null;
  activeSlideIndex: number;
};

export const ProductSliderPagination: FC<Props> = ({
  images,
  swiperRef,
  activeSlideIndex,
}) => {
  return (
    <section
      className="productSlider__pagination"
      style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)`}}
    >
      {images.map((productImage: string, index: number) => {
        const isActiveBullet = activeSlideIndex === index;
        const onBulletClick = () => swiperRef?.slideTo(index);

        return (
          <ProductSliderBullet
            key={productImage}
            image={productImage}
            isActive={isActiveBullet}
            onClick={onBulletClick}
          />
        );
      })}
    </section>
  );
};