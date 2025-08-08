import { useMemo } from 'react'
import ProductStarRating from './ProductStarRating';
import Divider from '../../../components/ui/Divider';
import ExpandablePanel from '../../../components/ui/ExpandablePanel';
import ProductStarRatingStarsContainer from './ProductStarRatingStarsContainer';
import ProductReviewShareRatingInfo from './ProductReviewShareRatingInfo';

const ProductRating = () => {


    const ratingPercentage = useMemo(() => [
        { starRating: 5, percentage: 80 },
        { starRating: 4, percentage: 10 },
        { starRating: 3, percentage: 5 },
        { starRating: 2, percentage: 3 },
        { starRating: 1, percentage: 2 }
    ], []);

    const content = useMemo(() => (
        {
            title: 'How does reviews and customer\'s ratings work',
            content: 'Customer reviews, including product star ratings, help other users learn more about a product and decide if it is right for them.',
            contentSecondary: 'To calculate the overall star rating and percentage breakdown by star, we do not use a simple average. Instead, our system considers factors such as the date of the review and whether the reviewer purchased the item on Amazon. Reviews are also analyzed to verify their reliability.'
        }
    ), []);

    const rating = useMemo(() => Math.floor(Math.random() * 5) + 1, []);
    return (
        <div className="w-full flex flex-col items-left justify-center p-2">
            <h2 className="text-2xl font-bold">Client opinions</h2>

            <div className='flex flex-col items-left gap-2 mt-2'>
                <ProductStarRatingStarsContainer rating={rating} />
            </div>
            <ProductStarRating ratingPercentage={ratingPercentage} />

            <ExpandablePanel title={content.title}
                content={content.content}
                contentSecondary={content.contentSecondary}
            />

            <Divider />

            <ProductReviewShareRatingInfo />

            <Divider />            
        </div>
    )
}

export default ProductRating