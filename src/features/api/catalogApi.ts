import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../../models/Product';
import type { CatalogueFilter } from '../../models/CatalogueFilter';
import type { PaginatedResult } from '../../models/PaginatedResult';
const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: (build) => ({
    getProducts: build.query<PaginatedResult<Product>, { pageSize?: number; pageNumber?: number }>({
      query: ({ pageSize = 8, pageNumber = 1 } = {}) => `/Products?pageSize=${pageSize}&pageNumber=${pageNumber}`,
    }),
    getProductDetail: build.query<Product, string>({
      query: (id: string) => `/Products/${id}`,
    }),
    getFilters: build.query<CatalogueFilter, void>({
      query: () => '/Products/filters',
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailQuery,
  useGetFiltersQuery,
} = catalogApi;
