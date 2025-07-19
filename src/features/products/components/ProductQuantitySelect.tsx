type ProductQuantitySelectProps = {
    quantityInStock: number;
    quantityChangeHandler?: (quantity: number) => void;
}
const ProductQuantitySelect = ({quantityInStock, quantityChangeHandler} : ProductQuantitySelectProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl text-[#067d62]">Available</h2>
            <label htmlFor="quantity" className="text-sm text-gray-700 mb-1">
                Quantity:
            </label>
            <select
                id="quantity"
                className="border rounded px-2 py-1 text-sm"
                defaultValue={1}
                onChange={(e) => {
                    const selectedQuantity = parseInt(e.target.value, 10);
                    if (quantityChangeHandler) {
                        quantityChangeHandler(selectedQuantity);
                    }
                }}
            >
                {Array.from({ length: Math.min(quantityInStock, 10) }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>

        </div>
    )
}

export default ProductQuantitySelect