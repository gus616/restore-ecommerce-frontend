import { useState } from "react";


type ShoppingCartContainerHeaderProps = {
    toggleHandler?: (toggle: boolean) => void
}

const ShoppingCartContainerHeader = ({ toggleHandler }: ShoppingCartContainerHeaderProps) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="flex flex-col items-start justify-start p-2 gap-2">
            <h1 className="text-[28px] font-semibold">Shopping Cart</h1>
            <span className="text-md text-[#2162a1] hover:text-[#1c558f] hover:underline cursor-pointer" onClick={() => {
                setToggle(!toggle);
                if (toggleHandler) {
                    toggleHandler(toggle);
                }
            }}>
                {
                    !toggle ? "Select All Items" : "Deselect All Items"
                }
            </span>
        </div>
    )
}

export default ShoppingCartContainerHeader