import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import ProductActions from './ProductActions'
import type { Product } from '../../../models/Product'


type ProductDetailProps = {
    product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {
    return (
        <div className="p-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Product Gallery Component */}
                <div className="md:col-span-1">
                    <ProductGallery images={product.images} />
                </div>


                {/* Product Info Component */}
                <ProductInfo product={product}/>

                {/* Product Actions Component */}

                <ProductActions />
            </div>
        </div>
    )
}

export default ProductDetail