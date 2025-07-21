import Button from "../../../components/ui/Button"
import { formatCurrency } from "../../../utils/utils"

const MiniCartPanel = () => {
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
                        <span className="font-bold text-red-800">{formatCurrency(1319)}</span>
                    </div>
                    <Button label="Go to cart" paddingX="3" paddingY="3" fontSize="xs" width={130} />
                </div>

                <hr className="w-[129px] border-gray-200 mb-2 mt-2" />

                {/* Cart Items */}
            </div>
        </div>

    )
}

export default MiniCartPanel