import { FC } from 'react'
import './CardProperty.scss';

type Props = {
  label: string;
  value: string;
  className: string;
};

export const CardProperty: FC<Props> = ({ label, value, className }) => {
  return (
    <div className={`${className}__property`} key={label}>
      <p className={`${className}__property-key`}>{label}</p>
      <p className={`${className}__property-value`}>{value}</p>
    </div>
  );
};