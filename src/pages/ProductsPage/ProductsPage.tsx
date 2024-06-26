import { FC, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import './ProductsPage.scss';
import { ProductType } from '@/types/ProductType';
import { SortBy } from '@/types/SortBy';
import { LinkLine } from '@components/LinkLine/LinkLine';
import { Container } from '@components/Container/Container';
import { ProductsList } from '@components/ProductsList/ProductsList';
import { Search } from '@components/Search/Search';
import { Pagination } from '@components/Pagination/Pagination';
import { DropDownSection } from '@components/DropDownSection/DropDownSection';
import { useFetch } from '@hooks/useFetch';
import { updateSearchParams } from '@utils/searchHelper';
import { getProducts, RequestParamsResult } from '@api/requests';

type Props = {
  productType: ProductType;
};

export const ProductsPage: FC<Props> = ({ productType }) => {
  const [productInfo, setProductInfo] = useState<RequestParamsResult>({
    pages: 1,
    products: [],
    models: 0,
  });
  const isHasProducts = productInfo.products.length > 0;
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || SortBy.NEW;
  const perPage = searchParams.get('perPage') || '8';
  const page = searchParams.get('page') || '1';
  const query = searchParams.get('query') || '';
  const sorts = useMemo(() => {
    return [SortBy.NAME, SortBy.NEW, SortBy.OLD, SortBy.LOW, SortBy.HIGHT];
  }, []);
  const arrayOfItems = ['8', '16', '32', '64'];

  const { isLoading, isError } = useFetch(
    async () => {
      setProductInfo(
        await getProducts(
          +perPage,
          +page,
          [productType],
          sorts.find((by: SortBy) => by === sort) || SortBy.NEW,
          query
        )
      );
    },
    () => {},
    () =>  window.scrollTo(0, 0),
    [page, perPage, productType, searchParams, query, sort, sorts],
  );

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

  const linkLine = [{ title: productType, link: `/${productType}` }];

  const onSortChange = (sort: string) => {
    updateSearchParams(searchParams, setSearchParams, { sort, page: null });
  };

  const onPerPageChange = (perPage: string) => {
    updateSearchParams(searchParams, setSearchParams, { perPage, page: null });
  };

  const debounce = (callback: (query: string) => void, delay: number) => {
    let timerId: NodeJS.Timeout;

    return (args: string) => {
      clearInterval(timerId);
      timerId = setTimeout(callback, delay, args);
    };
  };

  const onQueryChange = debounce((query: string) => {
    updateSearchParams(
      searchParams,
      setSearchParams,
      { query: query.trim().toLowerCase() || null, page: null }
    )
  }, 1000);

  if (!query) {
    searchParams.delete('query');
  }

  return (
    <article className="productsPage">
      <Container>
        <LinkLine titles={linkLine} />
        <h1 className="productsPage__title">{name}</h1>

        <p className="productsPage__modelsCount">
          {`${productInfo?.models || 0} models`}
        </p>
        
        <div className="productsPage__actions">
          <Search
            searchQuery={query}
            onChange={onQueryChange}
          />

          <div className="productsPage__dropDown">
            <DropDownSection
              title="Sort By"
              variables={sorts}
              searchParam={sort}
              onChange={onSortChange}
              defaultValue={1}
            />
            <DropDownSection
              title="Items on page"
              variables={arrayOfItems}
              searchParam={perPage}
              onChange={onPerPageChange}
              defaultValue={0}
            />
          </div>
        </div>

        {isError ? (
          <h1>Something went wrong 😔</h1>
        ) : (
          <ProductsList
            products={productInfo?.products}
            isLoading={isLoading}
          />
        )}
        {isHasProducts && <Pagination quantity={productInfo.models} />}
      </Container>
    </article>
  );
};