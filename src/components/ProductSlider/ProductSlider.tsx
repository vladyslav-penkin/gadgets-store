import { FC, useState } from 'react';
import './ProductSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import {
  ProductSliderPagination
} from './ProductSliderPagination/ProductSliderPagination';
import { ImageSlide } from './ImageSlide/ImageSlide';

type Props = {
  productImages: string[] | undefined;
};

export const ProductSlider: FC<Props> = ({ productImages = [] }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  swiperRef?.on('slideChange', () => (
    setActiveSlideIndex(swiperRef.realIndex)
  ));

  return (
    <article className="productSlider">
      <section className="productSlider__container">
        <ProductSliderPagination
          images={productImages}
          swiperRef={swiperRef}
          activeSlideIndex={activeSlideIndex}
        />

        <Swiper slidesPerView={1} onSwiper={setSwiperRef}>
          {productImages.map((productImage: string) => (
            <SwiperSlide key={productImage}>
              <ImageSlide image={productImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </article>
  );
};