import { NavLink } from 'react-router-dom'
import amazntLogo from '../../../assets/amazont-logo-white.png';
import { ChevronDown, ShoppingCart, SquareX } from 'lucide-react';
import { useState } from 'react';
const CheckoutNavbar = () => {

    const [isMessageOpen, setIsMessageOpen] = useState(false);
    return (
        <nav>
            <div className="flex items-center justify-between w-full bg-[#131921] text-white px-4 py-0.5">
                <NavLink to={"/"} >
                    <img src={amazntLogo} alt="logo" className="h-16 sm:h-16 w-auto object-contain" />
                </NavLink>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsMessageOpen(!isMessageOpen)}>
                    <h1 className="text-3xl text-white font-semibold">Secure checkout </h1>
                    <ChevronDown size={24} className="text-white mt-2" />
                </div>
                <NavLink to={"/cart"}>
                    <div className="flex items-end gap-2 cursor-pointer hover:border hover:border-white p-2">
                        <ShoppingCart size={32} className="text-white" />
                        <span className="text-white font-semibold">Cart</span>
                    </div>
                </NavLink>
            </div>
          {
    isMessageOpen && (
        <div className="fixed top-30 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white border border-gray-300 rounded-md p-4 shadow-lg">
            <div
                style={{
                    width: 0,
                    height: 0,
                    borderLeft: "16px solid transparent",
                    borderRight: "16px solid transparent",
                    borderBottom: "16px solid #fff",
                    position: "absolute",
                    top: "-16px",
                    left: "calc(50% - 16px)",
                }}
            />

            <div className="absolute top-2 right-2">
                <SquareX
                    size={24}
                    className="text-gray-500 cursor-pointer hover:text-gray-700"
                    onClick={() => setIsMessageOpen(false)}
                />
            </div>

            <p className="text-sm text-left mt-4 text-black">
                We secure your payment and personal information when you share or save it with us. We don't share payment details with third-party sellers. We don't sell your information to others.
                <span className="text-[#2162a1] hover:underline cursor-pointer ml-1">Learn more.</span>
            </p>
        </div>
    )
}


        </nav>

    )
}

export default CheckoutNavbar