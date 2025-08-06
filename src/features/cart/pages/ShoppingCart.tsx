import Layout from '../../../layout/Layout';
import CheckoutCard from '../components/CheckoutCard';
import ShoppingCartContainer from '../components/ShoppingCartContainer';
import { useCart } from '../../../hooks/useCart';

const ShoppingCart = () => {

    const { items, selectedIds, productsSelected, getSubTotal } = useCart();

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
            <div className="md:grid md:grid-cols-12 flex flex-col gap-1 justify-start w-full min-h-screen container mx-auto my-2">
                <ShoppingCartContainer items={items} selectedIds={selectedIds} subtotal={getSubTotal()} />
                <div className="sm:flex sm:flex-col md:col-span-3 md:min-h-screen container mx-auto px-10 py-15 bg-gray-200">
                    <CheckoutCard productsSelected={productsSelected.length} subtotal={getSubTotal()} />
                </div>
            </div>
        </Layout>
    )
}

export default ShoppingCart