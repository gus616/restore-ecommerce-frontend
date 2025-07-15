import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../../models/Product';
import type { CatalogueFilter } from '../../models/CatalogueFilter';

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7014/api',
  }),
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => `/Products`,
    }),
    getProductDetail: build.query<Product, string>({
      query: (id: string) => `/Products/${id}`
    }),
    getFilters: build.query<CatalogueFilter, void>({
      query: () => "/Products/filters"
    })
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery, useGetFiltersQuery } = catalogApi;
