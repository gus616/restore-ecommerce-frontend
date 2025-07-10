import { Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/detail/:id" element={<h1>Product Detail</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
    )
};

export default Router;