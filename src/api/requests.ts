import axios from 'axios';
import { ProductType } from '../types/ProductType';
import { SortBy } from '../types/SortBy';
import { Product } from '@/types/Product';

export const BASE_URL = 'https://nice-gadgets-api-n5r6.onrender.com';

export const get = async <T>(path: string): Promise<T> => {
  const { data } = await axios.get<T>(path);

  return data;
};

export type RequestParamsResult = {
  pages: number;
  products: Product[];
  models: number;
};

export const getProducts = async(
  perPage?: number,
  page?: number,
  productType?: ProductType[],
  sortBy?: SortBy,
  query?: string,
): Promise<RequestParamsResult> => {
  const queryParams = [];

  if (perPage) queryParams.push(`perPage=${perPage}`);
  if (page) queryParams.push(`page=${page}`);
  if (sortBy) queryParams.push(`sortBy=${sortBy}`);
  if (query) queryParams.push(`query=${query}`);

  if (productType) {
    productType.forEach((category) =>
      queryParams.push(`productType=${category}`));
  }

  const path = `${BASE_URL}/products${
    queryParams.length ? `?${queryParams.join('&')}` : ''
  }`;

  const { data } = await axios.get<RequestParamsResult>(path);

  return data;
};

export const getMinMax = (category: ProductType): Promise<number[]> => {
  return get(`${BASE_URL}/products/minmax?category=${category}`);
};

export const getNew = (limit?: number): Promise<Product[]> => {
  // default limit is 12
  return get<Product[]>(
    `${BASE_URL}/products/new${limit ? `?limit=${limit}` : ''}`,
  );
};

export const getHot = (limit?: number): Promise<Product[]> => {
  // default limit is 12
  return get<Product[]>(
    `${BASE_URL}/products/discount${limit ? `?limit=${limit}` : ''}`,
  );
};

export const getDetailedInfo = (id: string): Promise<Product> => {
  // apple-iphone-....
  return get(`${BASE_URL}/products/${id}`);
};

export const getRecommendations = (id: string): Promise<Product[]> => {
  return get(`${BASE_URL}/products/${id}/recommended`);
};

export type Banner = {
  mobile: string,
  desktop: string
}

export const getBanners = (): Promise<Banner[]> => {
  return get(`${BASE_URL}/images/banners`);
};
