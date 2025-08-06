
const CheckoutDeliveryInfo = () => {    
  return (
    <div className="flex flex-col items-start border border-gray-300 bg-white">
        <div className="flex flex-col gap-2 p-4">
            <h1 className="text-md font-bold">Arrives on 29 jul 2025</h1>
            <p className="text-sm">If you place your order within 1 hour and 59 minutes</p>
        </div>
        <div className="grid grid-cols-12 gap-4 p-4 y-300 w-full">
            <div className="col-span-7 bg-gray-200 h-[200px]">

            </div>
        </div>
    </div>
  )
}

export default CheckoutDeliveryInfo