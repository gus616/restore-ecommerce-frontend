import { Checkbox } from '@mui/material'
import type { CartItem } from '../../../models/CartItem'
import { formatCurrency, getTomorrowDate } from '../../../utils/utils'
import CartItemButtons from './CartItemButtons'
import { useAppDispatch } from '../../../store/store'
import { addToCart, removeFromCart, updateQuantity } from '../../../store/slices/cartSlice'
import CartActionsContainer from './CartActionsContainer'


type CartItemContainerProps = {
    item: CartItem
}

const CartItemContainer = ({ item }: CartItemContainerProps) => {

    const dispatch = useAppDispatch();

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
        <div className="w-full flex justify-start gap-10 py-4 bg-white mb-4">
            <Checkbox className="text-center" />
            <img src={item.pictureUrl} alt="Product" className="w-[150px] h[150px] object-fill" />

            {/* Product Details */}
            <div className="flex flex-col items-start justify-start">
                <h3 className="text-xl">{item.name}</h3>
                <p className="text-sm">by {item.brand}</p>
                <span className="text-xs font-bold">{item.type}</span>
                <span className="text-green-600">Available</span>
                <span>Deliver FREE, <span className="font-bold">{getTomorrowDate()}</span></span>
                <div className="flex items-center justify-start">
                    <Checkbox />
                    <span className="text-sm">This is a gift</span>
                </div>

                <div className="flex w-full items-center justify-start">
                    <CartItemButtons
                        item={item}
                        onAdd={handleAdd}
                        onSubtract={handleSubtract}
                        onRemove={handleRemove}
                    />
                    <CartActionsContainer />
                </div>

            </div>
            <div className="flex flex-row flex-1 items-start justify-end">
                <h2 className="text-bold text-right">{formatCurrency(item.price)}</h2>
            </div>
        </div>
    )
}

export default CartItemContainer