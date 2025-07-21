import {  PlusIcon, Trash2Icon } from "lucide-react"
import type { CartItem } from "../../../models/CartItem"
import { formatCurrency } from "../../../utils/utils"


type MiniCartItemProps = {
    item : CartItem
}

const MiniCartItem = ({item}: MiniCartItemProps) => {
  return (
    <div className="flex flex-col justify-between items-center mb-2">
        <div className="flex flex-col justify-between items-center mb-1 mt-2">
            <img src={item.pictureUrl} alt={item.name} className="w-20 h-full object-cover mb-2" />
            <span className="text-sm font-bold">{formatCurrency(item.price)}</span>
        </div>

        <div className="flex  justify-between items-center w-[120px] rounded-full border-3 border-yellow-300 py-1 px-2">
            <Trash2Icon className="w-4 h-4 font-bold cursor-pointer" />
            <span className="text-sm font-bold">{item.quantity}</span>
            <PlusIcon className="w-4 h-4 font-bold cursor-pointer" />
        </div>
    </div>
  )
}

export default MiniCartItem