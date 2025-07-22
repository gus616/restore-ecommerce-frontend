import Separator from "../../../components/ui/Separator"
import ShoppingCartContainerHeader from "./ShoppingCartContainerHeader"

const ShoppingCartContainer = () => {
    return (
        <div className="w-full min-h-screen container mx-auto px-10 py-15 bg-gray-200">
            <div className="bg-white p-5">
                <ShoppingCartContainerHeader />
                <Separator />
            </div>
        </div>
    )
}

export default ShoppingCartContainer