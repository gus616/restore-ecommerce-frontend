import React from 'react'

const ProductReviewShareRatingInfo = () => {
    return (
        <div className="flex flex-col items-left justify-center gap-4 mt-2 mb-4 w-[300px]">
            <h2 className="text-xl font-bold">Write a review about this product</h2>
            <p className="text-sm">Share your review with other customers</p>
            <button className="rounded-full border py-1 text-sm hover:bg-gray-100 cursor-pointer">Write my review</button>
        </div>
    )
}

export default ProductReviewShareRatingInfo