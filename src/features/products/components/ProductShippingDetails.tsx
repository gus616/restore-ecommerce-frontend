import { ChevronDown, ChevronUp } from 'lucide-react';
import { Fragment, useState } from 'react'

const ProductShippingDetails = () => {


    const [showAll, setShowAll] = useState(false);

    const infoItems = [
        { label: 'Shipped from', value: 'Amazon\'t México' },
        { label: 'Sold by', value: 'Amazon\'t México' },
        { label: 'Refunds', value: 'Refunds without any cost during 30 days since you receive the product.' },
        { label: 'Payment', value: 'Safe Transaction' },
        { label: 'Gift products', value: 'Options available at checkout.' }
    ];

    const visibleItems = showAll ? infoItems : infoItems.slice(0, 3);

    return (

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
            {
                visibleItems.map((item, index) => (
                    <Fragment key={index}>
                        <div className="text-xs text-gray-600">{item.label}</div>
                        <div className="text-xs">{item.value}</div>
                    </Fragment>
                ))
            }

            { /* Toggle link */}
            <div className="flex flex-row items-center cursor-pointer" onClick={() => setShowAll(!showAll)}>
                { !showAll ? (
                    <ChevronDown size={16} className="text-gray-600 mt-1 mr-1"   />
                ) : 
                    <ChevronUp size={16} className="text-gray-600 mt-1 mr-1" />
                }
                <span onClick={() => setShowAll(!showAll)}
                    className="col-span-2 text-xs text-[#2162a1] cursor-pointer hover:underline"
                >{showAll ? 'See less' : 'See more'}</span>
            </div>



        </div>
    )
}

export default ProductShippingDetails