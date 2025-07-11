import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'
import ProductWishlistDropdown from './ProductWishlistDropdown';

const ProductWishlistSelector = () => {
    const [isOpen, setIsOpen] = useState(false); // Placeholder for wishlist state
    return (
        <div className="w-full relative">
            <div className="grid grid-cols-5 border border-black w-full rounded-md items-start cursor-pointer"
            >
                <div className="col-span-4 flex items-center justify-start p-2">
                    <span className="text-xs">Add to Wish list</span>
                </div>


                <div className="col-span-1 border-l border-gray-500 flex flex-col items-center p-2"
                    onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? (
                            <ChevronUp size={16} className="text-black" />
                        ) : (
                            <ChevronDown size={16} className="text-black " />
                        )
                    }
                </div>
            </div>

            {isOpen && (

              <ProductWishlistDropdown />
            )}

        </div>

    )
}

export default ProductWishlistSelector