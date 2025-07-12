import { StarIcon } from 'lucide-react'
import React, { useMemo } from 'react'

const ProductRating = () => {


    const rating = useMemo(() => Math.floor(Math.random() * 5) + 1, []);

    return (
        <div className="w-full flex flex-col items-left justify-center p-2">
            <h2 className="text-2xl font-bold">Client opinions</h2>

            <div className='flex flex-col items-left gap-2 mt-2'>
                <div className="flex items-left gap-2">
                    {
                        Array.from({ length: rating }, (_, i) => (
                            <StarIcon key={i} fill="#ff6e21" className="h-5 w-5 text-[#ff6e21]" />
                        ))                      
                    }
                    {
                        Array.from({length: 5 - rating}, (_,i) => (
                            <StarIcon key={i + rating}  className='h-5 w-5 text-[#ff6e21]' />
                        ))
                    }
                    <span className="text-black text-md">{rating}.0 of 5</span>
                </div>
                <span className="text-gray-500">100 global reviews</span>
            </div>
        </div>
    )
}

export default ProductRating