import ProductList from '../features/catalog/components/ProductList';
import FilterMenu from '../features/catalog/components/FilterMenu';
import { useGetFiltersQuery, useGetProductsQuery } from '../features/api/catalogApi';
import Layout from '../layout/Layout';

const Catalog = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const { data: filters } = useGetFiltersQuery();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (isError || !products || !filters) {
    return <div className="flex justify-center items-center h-screen">Failed to load products</div>;
  }

  return (
    <Layout>
      <div className="w-full grid md:grid-cols-12 grid-cols-1 gap-2 px-10 py-15">
        <div className="md:col-span-2 sm:flex sm:flex-col sm:items-start sm:justify-start hidden">
          <FilterMenu filter={filters} />
        </div>
        <div className="md:col-span-10">
          <ProductList products={products} />
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
