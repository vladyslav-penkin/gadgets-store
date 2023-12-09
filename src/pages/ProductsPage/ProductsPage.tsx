import {
  FC,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import './ProductsPage.scss';
import { ProductType } from '@/types/ProductType';
import { SortBy } from '@/types/SortBy';
import { LinkLine } from '@components/LinkLine/LinkLine';
import { Container } from '@components/Container/Container';
import { getProducts, RequestParamsResult } from '@api/requests';
import { DropDown } from '@components/DropDown/DropDown';
import { updateSearchParams } from '@utils/searchHelper';
import { ProductsList } from '@components/ProductsList/ProductsList';
import { Search } from '@components/Search/Search';
import { Pagination } from '@components/Pagination/Pagination';

type Props = {
  productType: ProductType;
};

export const ProductsPage: FC<Props> = ({
  productType
}) => {
  const [productInfo, setProductInfo] = useState<RequestParamsResult>({
    pages: 1,
    products: [],
    models: 0,
  });
  const isHasProducts = productInfo.products.length > 0;
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || SortBy.NEW;
  const perPage = searchParams.get('perPage') || '8';
  const page = searchParams.get('page') || '1';
  const query = searchParams.get('query') || '';

  const sorts = useMemo(() => {
    return [SortBy.NAME, SortBy.NEW, SortBy.OLD, SortBy.LOW, SortBy.HIGHT];
  }, []);
  
  const name = useMemo(() => {
    switch (productType) {
      case ProductType.PHONES:
        return 'Mobile phones'
      case ProductType.TABLETS:
        return 'Tablets'
      case ProductType.ACCESSORIES:
        return 'Accessories';
      default:
        return '';
    }
  }, [productType]);
  const arrayOfItems = ['8', '16', '32', '64'];

  const linkLine = [{ title: productType, link: `/${productType}` }];

  const onSortChange = useCallback((sort: string) => {
    updateSearchParams(searchParams, setSearchParams, { sort });
  }, [searchParams, setSearchParams]);

  const onPerPageChange = useCallback((perPage: string) => {
    updateSearchParams(searchParams, setSearchParams, { perPage });
  }, [searchParams, setSearchParams]);

  const debounce = useCallback((
    callback: (query: string) => void,
    delay: number,
    ) => {
      let timerId: NodeJS.Timeout;

      return (args: string) => {
        clearInterval(timerId);
        timerId = setTimeout(callback, delay, args);
      };
    }, []);

  const onQueryChange = debounce((query: string) => {
    updateSearchParams(
      searchParams,
      setSearchParams,
      { query: query.trim().toLowerCase() || null }
    )
  }, 1000);

  if (!query) {
    searchParams.delete('query');
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);

      try {
        setProductInfo(
          await getProducts(
            +perPage,
            +page,
            [productType],
            sorts.find((by: SortBy) => by === sort) || SortBy.NEW,
            query
          )
        )
      } catch {
        setError(true);
      } finally {
        setLoading(false);
        scrollTo(0, 0);
      }
    })();
  }, [page, perPage, productType, query, searchParams, sort, sorts]);

  useEffect(() => {
    searchParams.delete('page');
  }, [searchParams]);

  return (
    <article className="productsPage">
      <Container>
        <LinkLine titles={linkLine} />
        <h1 className="productsPage__title">{name}</h1>

        <p className="productsPage__models-count">
          {`${productInfo?.models || 0} models`}
        </p>
        
        <div className="productsPage__actions">
          <Search
            searchQuery={query}
            onChange={onQueryChange}
          />
          <section className="productsPage__dropDown">
            <div className="productsPage__dropDown-container">
              <p className="productsPage__dropDown-title">
                Sort By
              </p>
              <DropDown
                variables={sorts}
                searchParam={sort}
                onChange={onSortChange}
                defaultValue={1}
              />
            </div>
            <div className="productsPage__dropDown-container">
              <p className="productsPage__dropDown-title">
                Items on page
              </p>
              <DropDown
                variables={arrayOfItems}
                searchParam={perPage}
                onChange={onPerPageChange}
                defaultValue={0}
              />
            </div>
          </section>
        </div>

        {isError ? (
          <h1>Something went wrong 😔</h1>
        ) : (
          <ProductsList
            products={productInfo?.products}
            isLoading={isLoading}
            isError={isError}
          />
        )}
        {isHasProducts && <Pagination quantity={productInfo.models} />}
      </Container>
    </article>
  );
};