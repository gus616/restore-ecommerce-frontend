import Divider from '../../../components/ui/Divider'
import ProductCommentUserDisplayCard from './ProductCommentUserDisplayCard'
import ProductStarRatingStarsContainer from './ProductStarRatingStarsContainer'


type ProductUserCommentContainerProps = {
    userName: string;
    rating: number;
    date?: string;
    reviewDescription: string;
    isVerified?: boolean;
    productImage?: string;
}

const ProductUserCommentContainer = ({ userName, rating, date, reviewDescription, isVerified = true }: ProductUserCommentContainerProps) => {
    return (
        <div className="flex flex-col space-y-4 w-[680px] mt-2 mb-2">
            {/* Comment card */}
            <div className="flex flex-col bg-white">
                <ProductCommentUserDisplayCard username={userName} />

                <div className="flex flex-col">
                    <div className="flex flex-nowrap gap-4 items-center">
                        <ProductStarRatingStarsContainer rating={rating} isReview={true} />
                        <span className="text-sm font-bold">Good Product</span>
                    </div>
                    <div className="flex flex-col flex-nowrap items-start">
                        <span className="text-sm text-gray-500">Commented on {date}</span>
                        {isVerified && <span className="text-xs text-[#c45500] font-bold"></span>}
                    </div>

                    <div className="flex flex-col">
                        <p className="text-sm mt-2">

                        </p>

                        {
                            reviewDescription.split('\n').map((line, index) => (
                                <p key={index} className="text-sm mt-2">
                                    {line}
                                </p>
                            ))
                        }

                    </div>
                </div>

                <Divider />
            </div>
        </div>
    )
}

export default ProductUserCommentContainer