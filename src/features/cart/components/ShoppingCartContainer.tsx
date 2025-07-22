import { useCallback } from "react"
import Separator from "../../../components/ui/Separator"
import type { CartItem } from "../../../models/CartItem"
import CartItemContainer from "./CartItemContainer"
import ShoppingCartContainerHeader from "./ShoppingCartContainerHeader"
import { formatCurrency } from "../../../utils/utils"


type ShoppingCartContainerProps = {
    items: CartItem[]
}
const ShoppingCartContainer = ({ items }: ShoppingCartContainerProps) => {

    const getSubTotal = useCallback(() => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0) || 0;
    }, [items]);
    return (
        <div className="col-span-9 min-h-screen container mx-auto px-10 py-15 bg-gray-200">
            <div className="bg-white p-5">
                <ShoppingCartContainerHeader />
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
                    <span className="text-xl font-bold text-right mt-2 mb-2">{
                        `Subtotal (${items.length} product${items.length > 1 ? "s" : ""}): ${formatCurrency(getSubTotal())}`
                    }</span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartContainer