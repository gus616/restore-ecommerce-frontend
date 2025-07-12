import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import ProductActions from './ProductActions'
import type { Product } from '../../../models/Product'
import Divider from '../../../components/ui/Divider'
import ProductRating from './ProductRating'


type ProductDetailProps = {
    product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {
    return (
        <>
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
                    <div className="md:col-span-2">
                        <ProductActions product={product} />
                    </div>
                </div>
            </div>

            {/*other clients also saw */}

            {/*Brands*/}
            <Divider />
            {/*Comment and review section*/}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-30 p-4">
                <div className="md:col-span-3">
                    <ProductRating />
                </div>
                <div className="md:col-span-8">
                    <h2 className="text-2xl font-semibold mb-4">Comments and Reviews</h2>
                       {/* Placeholder for comments and reviews */}
                    <p>No comments or reviews yet.</p>
                </div>
            </div>
        </>

    )
}

export default ProductDetail