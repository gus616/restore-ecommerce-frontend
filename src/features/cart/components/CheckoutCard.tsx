
const CheckoutCard = () => {
    return (
        <div className="w-full bg-white p-4 flex flex-col items-start justify-start">
            <h2 className="text-xl font-semibold text-left mb-2">No products selected</h2>
            <div className="flex items-center justify-center w-full p-2">
                <button className="rounded-full w-full py-2 px-2 bg-yellow-300 hover:bg-yellow-400 cursor-pointer text-xs"
                    onClick={() => {

                    }}
                >Proceed to checkout</button>
            </div>
        </div>
    )
}
export default CheckoutCard