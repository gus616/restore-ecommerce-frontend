type ProductWishlistItemProps = {
    list: {
        id: number;
        name: string;
        privacy: string;
        imgUrl: string;
    };
}

const ProductWishlistItem = ({list}: ProductWishlistItemProps) => {

    const { name, privacy, imgUrl } = list;
    return (
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-colors duration-200">
            <div>
                <img src={imgUrl} alt="wishlist-img"
                    className="w-6 h-6 border object-cover" />
            </div>

            <div className="flex flex-col">
                <div>
                    <span className="text-xs text-black">{name}</span>
                </div>
                <div>
                    <span className="text-xs text-gray-400">{privacy}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductWishlistItem