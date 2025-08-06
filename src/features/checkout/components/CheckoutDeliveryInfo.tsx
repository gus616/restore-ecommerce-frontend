import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import type { CartItem } from "../../../models/CartItem";
import { formatCurrency, getShippingDate, getTomorrowDate } from "../../../utils/utils";
import CartItemButtons from "../../cart/components/CartItemButtons";
import { useMemo, useState } from "react";



type CheckoutDeliveryInfoProps = {
    products: CartItem[];
    onAdd: (item: CartItem) => void,
    onSubstract: (item: CartItem) => void,
    onRemove: (item: CartItem) => void,
}

const CheckoutDeliveryInfo = ({ products, onAdd, onRemove, onSubstract }: CheckoutDeliveryInfoProps) => {
    const [deliveryDate, setDeliveryDate] = useState(getTomorrowDate());


    const randomShippingValue = useMemo(() => Math.floor(Math.random() * 15) + 1, []);

    return (
        <div className="flex flex-col items-start border border-gray-300 bg-white">
            <div className="flex flex-col gap-2 p-4">
                <h1 className="text-md font-bold">Arrives on {deliveryDate}</h1>
                <p className="text-sm">If you place your order within 1 hour and 59 minutes</p>
            </div>
            <div className="grid grid-cols-12 gap-4 p-4 y-300 w-full">
                <div className="col-span-7 bg-gray-100">
                    {
                        products.map((product) => (
                            <div key={product.id} className="flex items-start gap-2 p-2">
                                <div className="flex flex-col items-start p-2">
                                    <img src={product.pictureUrl} alt="product img" className="object-contain w-[100px] h-[100px]" />
                                    <div className="bg-white rounded-full mt-4">
                                        <CartItemButtons item={product} onAdd={onAdd} onRemove={onRemove} onSubtract={onSubstract} />
                                    </div>
                                    <span className="text-[#2162a1] text-sm hover:underline cursor-pointer mt-2">Add gift options</span>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <h2 className="text-sm">{product.name}</h2>
                                    <span className="text-sm font-bold">{formatCurrency(product.price)}</span>
                                    <p className="text-sm">Shipped by Amazon't</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="col-span-5 bg-white">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="tomorrow"
                        name="radio-buttons-group"
                    >
                        <div className="flex flex-col items-start">
                            <FormControlLabel
                                value="tomorrow"
                                control={<Radio />}
                                label={"Tomorrow," + getTomorrowDate()}
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                    }
                                }}
                                onChange={() => setDeliveryDate(getTomorrowDate())}
                            />
                            <span className="text-xs px-7 py-0">
                                FREE 1 day
                            </span>

                        </div>
                        <div className="flex flex-col items-start">
                            <FormControlLabel
                                value="other"
                                control={<Radio />}
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                    }
                                }}
                                label={"Program delivery, " + getShippingDate(randomShippingValue)}
                                onChange={() => setDeliveryDate(getShippingDate(randomShippingValue))}
                            />
                            <span className="text-xs px-7 py-0">
                                FREE Program Delivery
                            </span>
                            <span className="text-[#2162a1] text-xs px-7 py-0 hover:underline cursor-pointer mt-1">Change delivery date and time</span>
                        </div>


                    </RadioGroup>

                </div>
            </div>
        </div>
    )
}

export default CheckoutDeliveryInfo