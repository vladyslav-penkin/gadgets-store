import { FC } from 'react';
import './ImageSlide.scss';
import { BASE_URL } from '@api/requests';

type Props = {
  image: string;
};

export const ImageSlide: FC<Props> = ({ image }) => {
  return (
    <div
      className='productSlider__slide'
      style={{ backgroundImage: `url(${BASE_URL}/${image})` }}
    ></div>
  );
};