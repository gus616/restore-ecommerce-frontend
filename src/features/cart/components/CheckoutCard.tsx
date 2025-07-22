import { formatCurrency } from "../../../utils/utils"

type CheckoutCardProps = {
    productsSelected: number
    subtotal?: number
}
const CheckoutCard = ({ productsSelected, subtotal = 0}: CheckoutCardProps) => {

    return (
        <div className="w-full bg-white p-4 flex flex-col items-start justify-start">
            {productsSelected === 0 && <h2 className="text-xl font-semibold text-left mb-2">No products selected</h2>}

            {productsSelected > 0 && (
                <span className="text-xl font-bold text-left mt-2 mb-2">{
                    `Subtotal (${productsSelected} product${productsSelected > 1 ? "s" : ""}): ${formatCurrency(subtotal)}`
                }</span>
            )}
            <div className="flex items-center justify-center w-full p-2">
                <button className="rounded-full w-full py-2 px-2 bg-yellow-300 hover:bg-yellow-400 cursor-pointer text-xs"
                    onClick={() => {

                    }}
                    disabled={productsSelected=== 0}
                >Proceed to checkout</button>
            </div>
        </div>
    )
}
export default CheckoutCard