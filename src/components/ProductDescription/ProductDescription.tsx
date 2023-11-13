import { FC } from 'react';
import './ProductDescription.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const ProductDescription: FC<Props> = ({
  title,
  children
}) => {
  return (
    <section className="productDescription">
      <h1 className="productDescription__title">{title}</h1>
      {children}
    </section>
  );
}