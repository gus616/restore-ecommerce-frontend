import { useCallback } from "react"
import Button from "../../../components/ui/Button"
import type { CartItem } from "../../../models/CartItem"
import { formatCurrency } from "../../../utils/utils"
import MiniCartItem from "./MiniCartItem"
import { useAppDispatch } from "../../../store/store"
import { addToCart, removeFromCart, updateQuantity } from "../../../store/slices/cartSlice"


type MiniCartPanelProps = {
    items: CartItem[]
}

const MiniCartPanel = ({ items }: MiniCartPanelProps) => {

    const dispatch = useAppDispatch();

    const getSubtotal = useCallback(() => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0) || 0;
    }, [items]);

    const handleAdd = (item: CartItem) => {
        dispatch(addToCart({
            ...item,
            quantity: 1
        }));
    }

    const handleSubtract = (item: CartItem) => {
        dispatch(updateQuantity({
            id: item.id,
            quantity: item.quantity - 1
        }));
    }

    const handleRemove = (item: CartItem) => {
        dispatch(removeFromCart(item.id));
    };

    return (
        <div className="relative">
            {/* Triangle Pointer */}
            <div className="absolute top-8 -left-2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-white shadow-sm" />

            {/* Panel Content */}
            <div className="w-[140px] h-full bg-white border-gray-200 flex flex-col justify-start items-center shadow-lg">
                {/* Subtotals */}
                <div className="text-sm flex flex-col mb-2">
                    <div className="flex flex-col justify-between items-center mb-1 mt-2">
                        <span className="text-xs">Subtotal</span>
                        <span className="font-bold text-red-800">{formatCurrency(getSubtotal())}</span>
                    </div>
                    <Button label="Go to cart" paddingX="3" paddingY="3" fontSize="xs" width={130} />
                </div>

                <hr className="w-[129px] border-gray-200 mb-2 mt-2" />

                {/* Cart Items */}
                {
                    items.map((item) => (
                        <MiniCartItem item={item}
                            key={item.id}
                            onAdd={handleAdd}
                            onSubtract={handleSubtract}
                            onRemove={handleRemove}
                        />
                    ))
                }
            </div>
        </div>

    )
}

export default MiniCartPanel