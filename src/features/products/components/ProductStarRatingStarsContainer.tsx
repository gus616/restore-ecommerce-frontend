import { StarIcon } from 'lucide-react';


type ProductStarRatingStarsContainerProps = {
    rating: number;
    isReview?: boolean; // Optional prop to indicate if it's a review
}

const ProductStarRatingStarsContainer = ({ rating, isReview = false }: ProductStarRatingStarsContainerProps) => {
    return (
        <div>
            <div className="flex items-left gap-2">
                {
                    Array.from({ length: rating }, (_, i) => (
                        <StarIcon size={isReview ? 14 : 18} key={i} fill="#ff6e21" className=" text-[#ff6e21]" />
                    ))
                }
                {
                    Array.from({ length: 5 - rating }, (_, i) => (
                        <StarIcon size={isReview ? 14 : 18}  key={i + rating} className='text-[#ff6e21]' />
                    ))
                }
                { !isReview && <span className="text-black text-md">{rating}.0 of 5</span>}
            </div>
            {
                !isReview && <span className="text-gray-500 text-sm">100 global reviews</span>
            }


        </div>
    )
}

export default ProductStarRatingStarsContainer