import Button from '../../../components/ui/Button'

const ProductReviewShareRatingInfo = () => {
    return (
        <div className="flex flex-col items-left justify-center gap-4 mt-2 mb-4 w-[300px]">
            <h2 className="text-xl font-bold">Write a review about this product</h2>
            <p className="text-sm">Share your review with other customers</p>
            <Button
             label="Write my review"
            />
        </div>
    )
}

export default ProductReviewShareRatingInfo