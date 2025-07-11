
const ProductActionButtons = () => {
    return (
        <div className='flex flex-col gap-2 mt-2'>
            <button className="rounded-full w-full py-2 px-2 bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-xs">Add To Cart</button>
            <button className="rounded-full w-full py-2 px-2 bg-orange-400 hover:bg-orange-500 cursor-pointer text-xs">Buy now</button>
        </div>
    )
}

export default ProductActionButtons