import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import ProductActions from './ProductActions'
import type { Product } from '../../../models/Product'


type ProductDetailProps = {
    product: Product
}

const ProductDetail = ({product}: ProductDetailProps) => {
  return (
    <div className="p-4 max-w-7xl mx-auto">        
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Gallery Component */}
            <ProductGallery images={product.images}/>

            {/* Product Info Component */}
            <ProductInfo />

            {/* Product Actions Component */}

            <ProductActions />
        </div>
    </div>
  )
}

export default ProductDetail