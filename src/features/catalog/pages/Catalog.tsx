import Layout from "../../../layout/Layout";
import { useGetFiltersQuery, useGetProductsQuery } from "../../api/catalogApi";
import FilterMenu from "../components/FilterMenu";
import ProductList from "../components/ProductList";

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
    <Layout shouldShowCart={true}>
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
