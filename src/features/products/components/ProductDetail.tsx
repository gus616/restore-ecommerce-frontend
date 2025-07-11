import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import ProductActions from './ProductActions'
import type { Product } from '../../../models/Product'


type ProductDetailProps = {
    product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {
    return (
        <div className="p-4 max-w-10xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Product Gallery Component */}
                <div className="md:col-span-4">
                    <ProductGallery images={product.images} />
                </div>


                {/* Product Info Component */}
                <div className="md:col-span-6 space-y-6">

                    <ProductInfo product={product} /></div>
                {/* Product Actions Component */}
                <div className="md:col-span-1">
                    <ProductActions product={product} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail