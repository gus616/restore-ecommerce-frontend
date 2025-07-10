import type { Product } from "../../../models/Product"
import ProductCard from "./ProductCard"



type ProductListProps = {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {

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
    </section>

  )
}

export default ProductList