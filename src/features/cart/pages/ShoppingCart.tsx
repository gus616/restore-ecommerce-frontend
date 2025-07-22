import Layout from '../../../layout/Layout';
import { useAppSelector } from '../../../store/store'
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
            <ShoppingCartContainer />
        </Layout>
    )
}

export default ShoppingCart