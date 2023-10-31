import { FC } from 'react';
import './PaginationBullets.scss';
import classNames from 'classnames';

type Props = {
  visibleBullets: number[];
  currentPage: number;
  onClick: (bullet: number) => void;
};

export const PaginationBullets: FC<Props> = ({
  visibleBullets,
  currentPage,
  onClick,
}) => {
  return (
    <section className="pagination__bullets">
      {visibleBullets.map((bullet: number) => (
        <button 
          key={bullet}
          className={classNames('pagination__bullet', {
            'pagination__bullet--active': bullet === currentPage,
          })}
          onClick={() => onClick(bullet)}
        >
          {bullet}
        </button>
      ))}
    </section>
  );
};