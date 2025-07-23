import Separator from "../../../components/ui/Separator"
import type { CartItem } from "../../../models/CartItem"
import CartItemContainer from "./CartItemContainer"
import ShoppingCartContainerHeader from "./ShoppingCartContainerHeader"
import { formatCurrency } from "../../../utils/utils"
import { useAppDispatch } from "../../../store/store"
import { clearSelected, selectAll } from "../../../store/slices/cartSlice"


type ShoppingCartContainerProps = {
    items: CartItem[],
    selectedIds?: number[],
    subtotal?: number
}
const ShoppingCartContainer = ({ items, selectedIds, subtotal = 0 }: ShoppingCartContainerProps) => {
    const dispatch = useAppDispatch();
    const toggleHandler = (toggle: boolean) => {
        if(!toggle){
            dispatch(selectAll());
        } else {
            dispatch(clearSelected());
        }
    }
    return (
        <div className="sm:flex sm:flex-col sm:h-full col-span-9 min-h-screen container mx-auto px-10 py-15 bg-gray-200">
            <div className="bg-white p-5">
                <ShoppingCartContainerHeader toggleHandler={toggleHandler}/>
                <div className="w-full mx-auto flex flex-col items-end justify-end">
                    <span className="text-sm mr-2">Price</span>
                    <Separator />
                </div>
                {
                    items.map((item) => (
                        <div key={item.id + item.name} className="w-full">
                            <CartItemContainer key={item.id + "-cartItem"} item={item} />
                            <Separator />
                        </div>
                    ))
                }
                <div className="w-full mx-auto flex flex-col items-end justify-end">
                    {selectedIds &&<span className="text-xl font-bold text-right mt-2 mb-2">{
                        `Subtotal (${selectedIds?.length} product${selectedIds?.length > 1 ? "s" : ""}): ${formatCurrency(subtotal)}`
                    }</span>}
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartContainer