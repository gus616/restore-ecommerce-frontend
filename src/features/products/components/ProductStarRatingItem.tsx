
type ProductStarRatingItem = {
    starRating: number;
    percentage: number;
}

const ProductStarRatingItem = ({ starRating, percentage }: ProductStarRatingItem) => {
    return (
        <div className="flex items-center gap-2 md:gap-4">
            <span className="col-span-1 text-[#2162a1] text-md whitespace-nowrap w-16">{starRating} {starRating === 1 ? 'star' : 'stars'}</span>
            <div className="col-span-3">
                <div className="grid grid-cols-100 rounded w-[130px] h-5 border border-gray-300">
                    {
                        Array.from({ length: percentage }, (_, i) => (
                            <div key={i} className="bg-[#ff6e21] h-full col-span-1"></div>
                        ))
                    }
                </div>
            </div>
            <span className="text-[#2162a1] text-sm col-span-1">{Math.floor(percentage)}%</span>
        </div>
    )
}

export default ProductStarRatingItem