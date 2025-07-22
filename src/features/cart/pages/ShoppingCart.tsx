import { useCallback, useMemo } from 'react';
import Layout from '../../../layout/Layout';
import { useAppSelector } from '../../../store/store'
import CheckoutCard from '../components/CheckoutCard';
import ShoppingCartContainer from '../components/ShoppingCartContainer';

const ShoppingCart = () => {

    const { items, selectedIds } = useAppSelector((state) => state.cart);

    const productsSelected = useMemo(() => {
        if (!selectedIds || selectedIds.length === 0) return [];
        return items.filter(item => selectedIds.includes(item.id));
    }, [items, selectedIds]);


    const getSubTotal = useCallback(() => {
        if (!selectedIds?.length) return 0;

        const selectedItems = items.filter(item => selectedIds.includes(item.id));

        if (selectedItems.length === 0) {
            return 0;
        }

        return selectedItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }, [items, selectedIds]);

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
                <ShoppingCartContainer items={items} selectedIds={selectedIds} subtotal={getSubTotal()}/>
                <div className="sm:flex sm:flex-col md:col-span-3 md:min-h-screen container mx-auto px-10 py-15 bg-gray-200">
                    <CheckoutCard productsSelected={productsSelected.length} subtotal={getSubTotal()} />
                </div>
            </div>
        </Layout>
    )
}

export default ShoppingCart