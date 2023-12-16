import { FC } from 'react';
import './ProductTechSpecs.scss';
import { Phone } from '@/types/Phone';

type Props = {
  product: Phone;
};

export const ProductTechSpecs: FC<Props> = ({ product }) => {
  const techSpecs = {
    Screen: product.screen,
    Resolution: product.resolution,
    Processor: product.processor,
    RAM: product.ram,
    Capacity: product.capacity,
    Camera: product.camera,
    Zoom: product.zoom,
    Cell: product.cell.join(', '),
  };

  return (
    <section className="productTechSpecs">
      {Object.entries(techSpecs).map(([key, value]) => (
        <div 
          className="productTechSpecs__property" 
          key={key}
        >
          <p className="productTechSpecs__property-key">
            {key}
          </p>
          <p className="productTechSpecs__property-value">
            {value}
          </p>
        </div>
      ))}
    </section>
  );
};