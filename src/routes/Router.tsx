import { Routes, Route, Navigate } from "react-router-dom";
import Catalog from "../features/catalog/pages/Catalog";
import Product from "../features/products/pages/Product";
import ShoppingCart from "../features/cart/pages/ShoppingCart";
import Login from "../features/auth/pages/Login";
import { useAppSelector } from "../store/store";
import Checkout from "../features/checkout/pages/Checkout";



const Router = () => {
    const { user } = useAppSelector(state => state.auth);
    return (
        <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/detail/:id" element={<Product />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<h1>About Page</h1>} />
            { user && <Route path="/checkout" element={<Checkout />} /> }
            {/* Fallback route for 404 or unauthenticated */}
            <Route path="*" element={
                <Navigate to="/" replace />
            } />
        </Routes>
    )
};

export default Router;