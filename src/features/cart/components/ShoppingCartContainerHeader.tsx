
const ShoppingCartContainerHeader = () => {
    return (
        <div className="flex flex-col items-start justify-start p-2 gap-2">
            <h1 className="text-[28px] font-semibold">Shopping Cart</h1>
            <span className="text-md text-[#2162a1] hover:text-[#1c558f] hover:underline cursor-pointer">Unselect all items</span>
        </div>
    )
}

export default ShoppingCartContainerHeader