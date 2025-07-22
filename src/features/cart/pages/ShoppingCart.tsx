import Layout from '../../../layout/Layout';
import { useAppSelector } from '../../../store/store'
import CheckoutCard from '../components/CheckoutCard';
import ShoppingCartContainer from '../components/ShoppingCartContainer';

const ShoppingCart = () => {

    const { items } = useAppSelector((state) => state.cart);


    console.log("ShoppingCart items:", items);

    if (items.length === 0) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-2xl">Your cart is empty</h1>
                </div>
            </Layout>
        );
    }

    return (
        <Layout shouldShowCart={false} bgColor="bg-gray-200">
            <div className="grid grid-cols-12 gap-1 justify-start w-full min-h-screen container mx-auto my-2">
                <ShoppingCartContainer items={items} />
                <div className="col-span-3 min-h-screen container mx-auto px-10 py-15 bg-gray-200">
                    <CheckoutCard />
                </div>
            </div>
        </Layout>
    )
}

export default ShoppingCart