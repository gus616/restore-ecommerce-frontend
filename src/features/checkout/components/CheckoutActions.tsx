import Separator from '../../../components/ui/Separator'
import { formatCurrency } from '../../../utils/utils'


type CheckoutActionsProps = {
  subtotal: number;
  isDisabled?: boolean;
}

const CheckoutActions = ({subtotal, isDisabled} : CheckoutActionsProps) => {

  return (
    <div className="w-full min-h-1 flex flex-col gap-4 p-4 bg-white">
      <div>
        <button 
         className="w-full rounded-full p-2 bg-yellow-300 disabled:bg-yellow-200 text-black text-xs my-2 cursor-pointer"
          disabled={!isDisabled}
         >Place your order and pay</button>
        <span className="text-xs">
          By placing your order, you agree to Amazon's <span className="text-blue-500 hover:underline cursor-pointer">Conditions of Use</span> and <span className="text-blue-500 hover:underline cursor-pointer">Privacy Notice</span>.
          <br />
        </span>
      </div>

      <Separator />

      <div className="flex flex-col gap-2 justify-start text-xs">
        <div className="flex justify-between items-center">
          <span>Products:</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Shipping:</span>
          <span>{formatCurrency(0)}</span>
        </div>
        <div className="flex justify-between items-center">
            <span>Total (Taxes included, if applicable)</span>
            <span className="font-bold">{formatCurrency(subtotal)}</span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutActions