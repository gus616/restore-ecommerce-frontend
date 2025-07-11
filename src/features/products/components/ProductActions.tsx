import React from 'react'
import type { Product } from '../../../models/Product';
import { formatCurrency } from '../../../utils/utils';
import { MapPin } from 'lucide-react';


type ProductActionsProps = {
    product: Product
};

const ProductActions = ({ product }: ProductActionsProps) => {

    if (!product) return null;


    return (
        <div className="border border-gray-300 rounded-md p-2 shadow-sm h-[700px] md:w-[200px] flex flex-col justify-between">
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
                    <h2 className="text-xl text-[#067d62]">Available</h2>
                    <label htmlFor="quantity" className="text-sm text-gray-700 mb-1">
                        Quantity:
                    </label>
                    <select
                        id="quantity"
                        className="border rounded px-2 py-1 text-sm"
                        defaultValue={1}
                    >
                        {Array.from({ length: Math.min(product.quantityInStock, 10) }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>)

}

export default ProductActions