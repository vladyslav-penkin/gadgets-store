import { ReactNode, FC } from 'react';
import './Container.scss';

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({
  children,
  ...props
}) => {
  return (
    <div className="container" {...props}>
      {children}
    </div>
  );
};