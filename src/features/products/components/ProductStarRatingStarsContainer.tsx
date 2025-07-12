import { StarIcon } from 'lucide-react';


type ProductStarRatingStarsContainerProps = {
    rating: number;
}

const ProductStarRatingStarsContainer = ({rating}: ProductStarRatingStarsContainerProps) => {
    return (
        <div>
            <div className="flex items-left gap-2">
                {
                    Array.from({ length: rating }, (_, i) => (
                        <StarIcon key={i} fill="#ff6e21" className="h-5 w-5 text-[#ff6e21]" />
                    ))
                }
                {
                    Array.from({ length: 5 - rating }, (_, i) => (
                        <StarIcon key={i + rating} className='h-5 w-5 text-[#ff6e21]' />
                    ))
                }
                <span className="text-black text-md">{rating}.0 of 5</span>
            </div>
            <span className="text-gray-500 text-sm">100 global reviews</span>

        </div>
    )
}

export default ProductStarRatingStarsContainer