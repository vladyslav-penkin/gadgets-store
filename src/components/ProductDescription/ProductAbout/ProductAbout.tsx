import { FC } from 'react';
import './ProductAbout.scss';
import { ProductDescription } from '@/types/ProductDescription';

type Props = {
  description: ProductDescription[];
};

export const ProductAbout: FC<Props> = ({
  description,
}) => {
  return (
    <section className="productAbout">
      {description.map(({ title, text }) => (
        <>
          <p className="productAbout__header" key={title}>{title}</p>
          {text.map((title: string) => (
            <p className="productAbout__title" key={title}>{title}</p>
          ))}
        </>
      ))}
    </section>
  ); 
};