import { 
  FC,
  useMemo,
  useCallback,
} from 'react';
import './Pagination.scss';
import { useSearchParams } from 'react-router-dom';
import { updateSearchParams } from '@utils/searchHelper';
import { PaginationButton } from '@components/Pagination/PaginationButton/PaginationButton';
import { PaginationBullets } from '@components/Pagination/PaginationBullets/PaginationBullets';
import { PaginationButtonType } from '@/types/PaginationButtonType';

type Props = {
  quantity: number;
};

export const Pagination: FC<Props> = ({ quantity }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || '1');
  const perPage = Number(searchParams.get('perPage') || '8');
  const quantityPages = Math.ceil(quantity / perPage);

  const onPageChange = useCallback((page: string) => {
    updateSearchParams(
      searchParams,
      setSearchParams,
      { page }
    )
  }, [searchParams, setSearchParams]);

  const getBulletTitles = useCallback((quantity: number) => {
    const visibleBullets = [];

    for (let i = 0; i < quantity; i++) {
      visibleBullets.push(i + 1);
    }

    return visibleBullets;
  }, []);
 
  const getVisibleBullets = useCallback((
    currentPage: number, 
    allVisibleBullets: number[],
  ) => {
    const visibleBullets = [...allVisibleBullets];

    if (currentPage <= 3) {
      return visibleBullets.splice(0, 4);
    }

    if (currentPage > visibleBullets[visibleBullets.length - 4]) {
      return visibleBullets.slice(-4);
    }

    return visibleBullets.slice(currentPage - 2, currentPage + 2);
  }, []);

  const allVisibleBullets = useMemo(() => {
    return getBulletTitles(quantityPages);
  }, [getBulletTitles, quantityPages]);

  const visibleBullets = useMemo(() => {
    return getVisibleBullets(page, allVisibleBullets);
  }, [allVisibleBullets, getVisibleBullets, page]);

  return (
    <article className="pagination">
      <PaginationButton
        totalPages={quantityPages}
        type={PaginationButtonType.Previous}
        currentPage={page}
        onClick={() => onPageChange(String(page - 1))}
      />
      <PaginationBullets
        visibleBullets={visibleBullets}
        currentPage={page}
        onClick={(bullet: number) => onPageChange(String(bullet))}
      />
      <PaginationButton
        totalPages={quantityPages}
        type={PaginationButtonType.Next}
        currentPage={page}
        onClick={() => onPageChange(String(page + 1))}
      />
    </article>
  );
};