import type { Product } from "../../../models/Product"
import ProductCard from "./ProductCard"
import ProductPagination from "../../products/components/ProductPagination"



type ProductListProps = {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-gray-700">No Products Found</h2>
      </div>
    )
  }

  return (
    <section className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 place-items-center">
        {
          products?.map((product) =>
          (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
      {/*Pagination */}
      <ProductPagination paginationSize={5} currentPage={1} />
    </section>

  )
}

export default ProductList