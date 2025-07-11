import React from 'react'
import type { Product } from '../../../models/Product'
import { formatCurrency } from '../../../utils/utils'
import { Lock, MessageSquareTextIcon, RotateCw, Truck } from 'lucide-react'
import Divider from '../../../components/ui/Divider'


type ProductInfoProps = {
    product: Product
}

const ProductInfo = ({ product }: ProductInfoProps) => {
    return (
        <div className="space-y-4 text-gray-800 w-full">
            {/* Title */}
            <h1 className="text-2xl font-semibold leading-snug">{product.name} </h1>
            {/* Brand */}
            {<p className="text-sm text-gray-500">Brand: <span className="text-black font-medium">
                {product.brand}
            </span> </p>}
            {/* Rating */}
            <div className="flex items-center text-yellow-500 text-sm gap-2">
                <span>
                    {'⭐'.repeat(3)}{'☆'.repeat(2)}
                </span>
                <span className="text-gray-600 text-xs">
                    ({123}) ratings
                </span>
            </div>
           <Divider />

            {/* Category */}
            <p className="text-sm text-gray-500">Category: <span className="text-black">{product.type}</span></p>


            {/* Price (optional) */}
            <p className="text-xl font-bold text-gray-900">
                {formatCurrency(product.price)}
            </p>


            <div className="flex justify-start items-center gap-6 text-sm text-gray-700 mb-4">
                {/* Secure payment */}
                <div className="flex flex-col items-center gap-2">
                    <Lock size={18} className="text-yellow-500" />
                    <span className="text-[#2162a1] hover:text-yellow-600 transition-colors cursor-pointer">Secure payment</span>
                </div>

                {/* Free returns */}
                <div className="flex flex-col items-center gap-2 ">
                    <RotateCw size={18} className="text-yellow-500 " />
                    <span className="text-[#2162a1] hover:text-yellow-600 transition-colors cursor-pointer">30-day free returns</span>
                </div>

                {/* Amazon shipping */}
                <div className="flex flex-col items-center gap-2">
                    <Truck size={18} className="text-yellow-500" />
                    <span className="text-[#2162a1] hover:text-yellow-600 transition-colors cursor-pointer">Shipped by ReStore</span>
                </div>
            </div>
             <Divider />

            {/* Other vendors*/}
            <div>
                <p className="text-sm text-gray-500 mb-2">
                    Can be available in a lower price from other vendors, potentially with different shipping options.
                </p>
            </div>

            {/* Description */}

            <div>         
                <p className="text-sm text-gray-700">
                    {product.description || 'No description available.'}
                </p>
            </div>

            
            {/* Bullet Points / Features (if any) */}

            <div>       
                <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>

                
            </div>

            <div className="flex items-center gap-1">
                <MessageSquareTextIcon size={18} className="text-gray-400" />
                <span className="text-sm text-[#2162a1]">Inform about a problem with this product.</span>
            </div>

            <Divider />

        </div>
    )
}

export default ProductInfo