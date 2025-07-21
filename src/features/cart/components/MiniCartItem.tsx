import { LoaderCircle, MinusIcon, PlusIcon, Trash2Icon } from "lucide-react"
import type { CartItem } from "../../../models/CartItem"
import { formatCurrency } from "../../../utils/utils"
import { useState } from "react"


type MiniCartItemProps = {
    item: CartItem,
    onSubtract?: (item: CartItem) => void,
    onRemove?: (item: CartItem) => void,
    onAdd?: (item: CartItem) => void,
}

const MiniCartItem = ({ item, onSubtract, onRemove, onAdd }: MiniCartItemProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const actionHandler = (action: 'add' | 'subtract' | 'remove') => {
        setIsLoading(true);

        setTimeout(() => {
            switch (action) {
                case 'add':
                    onAdd?.(item);
                    break;
                case 'subtract':
                    onSubtract?.(item);
                    break;
                case 'remove':
                    onRemove?.(item);
                    break;
            }
            setIsLoading(false);
        }, 500);
    }

    return (
        <div className="flex flex-col justify-between items-center mb-2">
            <div className="flex flex-col justify-between items-center mb-1 mt-2">
                <img src={item.pictureUrl} alt={item.name} className="w-20 h-full object-cover mb-2" />
                <span className="text-sm font-bold">{formatCurrency(item.price)}</span>
            </div>

            <div className="flex  justify-between items-center w-[120px] rounded-full border-3 border-yellow-300 py-1 px-2">
                {
                    item.quantity > 1 && (
                        <MinusIcon
                            className={`w-4 h-4 font-bold cursor-pointer ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}
                            onClick={() => !isLoading && actionHandler('subtract')}
                        />
                    )
                }

                {
                    item.quantity === 1 && (
                        <Trash2Icon className="w-4 h-4 font-bold cursor-pointer" onClick={() => !isLoading && actionHandler('remove')} />
                    )
                }
                <span className="flex items-center justify-center w-6 h-6" >
                    {isLoading ? (
                        <LoaderCircle className="w-3 h-3 text-blue-600 animate-spin" />
                    ) : (
                        <span className="text-sm font-bold">{item.quantity}</span>
                    )}
                </span>
                <PlusIcon className="w-4 h-4 font-bold cursor-pointer" onClick={() => !isLoading && actionHandler('add')} />
            </div>
        </div>
    )
}

export default MiniCartItem