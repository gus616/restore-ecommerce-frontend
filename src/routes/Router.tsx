import { Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/detail/:id" element={<Product />} />
            <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
    )
};

export default Router;