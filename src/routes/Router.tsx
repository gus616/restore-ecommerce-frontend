import { Routes, Route } from "react-router-dom";
import Catalog from "../features/catalog/pages/Catalog";
import Product from "../features/products/pages/Product";
import ShoppingCart from "../features/cart/pages/ShoppingCart";
import Login from "../features/auth/pages/Login";



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/detail/:id" element={<Product />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
    )
};

export default Router;