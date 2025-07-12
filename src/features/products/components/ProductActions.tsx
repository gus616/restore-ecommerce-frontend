import React from 'react'
import type { Product } from '../../../models/Product';
import { formatCurrency } from '../../../utils/utils';
import { ChevronRight, MapPin } from 'lucide-react';
import ProductShippingDetails from './ProductShippingDetails';
import ProductActionButtons from './ProductActionButtons';
import ProductQuantitySelect from './ProductQuantitySelect';
import Divider from '../../../components/ui/Divider';
import ProductWishlistSelector from './ProductWishlistSelector';


type ProductActionsProps = {
    product: Product
};

const ProductActions = ({ product }: ProductActionsProps) => {

    if (!product) return null;


    return (
        <>
            <div className="border border-gray-300 rounded-md p-2 shadow-sm h-auto md:w-[240px] flex flex-col justify-between">
                {/* Price */}
                <div className="flex flex-col flex-start gap-2 p-2">
                    <p className="text-xl font-bold text-gray-900">
                        {formatCurrency(product.price)}
                    </p>

                    <p className="text-sm text-black">
                        Delivery FREE on <span className="font-bold">Monday, 30 Oct</span>. Order within
                        <span className="text-[#067D62]"> 1 hr 30 min. </span>
                        <span className="text-[#2162a1] underline">Details</span>
                    </p>

                    <div className="flex flex-row items-center gap-2">
                        <MapPin size={18} className="" />
                        <p className="text-[#2162a1] text-xs">Send to Gustavo - Mexico City... 06700</p>
                    </div>

                    <div className="flex flex-col flex-start gap-2 mt-2">
                        <ProductQuantitySelect quantityInStock={product.quantityInStock} />

                        <ProductActionButtons />

                        <ProductShippingDetails />


                    </div>
                    <Divider />

                    <ProductWishlistSelector />
                </div>

            </div>
            <div className="md:w-[240px] flex flex-col items-center py-4 px-2 border border-gray-300 rounded-md shadow-sm mt-2">
                <h2 className="font-bold text-xl">Other vendors in Amazon't</h2>
                <Divider />
                <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-600 cursor-pointer">
                        Compare other vendors options for this product
                    </p>
                    <ChevronRight size={40} className="cursor-pointer"/>
                </div>

            </div>
        </>)

}

export default ProductActions