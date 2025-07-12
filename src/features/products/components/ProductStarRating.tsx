import React from 'react'
import ProductStarRatingItem from './ProductStarRatingItem';



type StarRating = {
    starRating: number;
    percentage: number;
}

type ProductStarRatingProps = {
    ratingPercentage: StarRating[];
}


const ProductStarRating = ({ ratingPercentage }: ProductStarRatingProps) => {

    return (
        <div className="flex flex-col gap-4 mt-2 w-full">
            {ratingPercentage?.map((star, index) => (               
               <ProductStarRatingItem
                    key={index}
                    starRating={star.starRating}
                    percentage={star.percentage}
                />
            ))}
        </div>
    )
}

export default ProductStarRating