import type { CartItem } from "../../../models/CartItem"
import { formatCurrency } from "../../../utils/utils"
import CartItemButtons from "./CartItemButtons"


type MiniCartItemProps = {
    item: CartItem,
    onSubtract?: (item: CartItem) => void,
    onRemove?: (item: CartItem) => void,
    onAdd?: (item: CartItem) => void,
}

const MiniCartItem = ({ item, onSubtract, onRemove, onAdd }: MiniCartItemProps) => {
    return (
        <div className="flex flex-col justify-between items-center mb-2">
            <div className="flex flex-col justify-between items-center mb-1 mt-2">
                <img src={item.pictureUrl} alt={item.name} className="w-20 h-full object-cover mb-2" />
                <span className="text-sm font-bold">{formatCurrency(item.price)}</span>
            </div>
            <CartItemButtons
                item={item}
                onAdd={onAdd}
                onSubtract={onSubtract}
                onRemove={onRemove}
            />
        </div>
    )
}

export default MiniCartItem