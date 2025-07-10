import type { Product } from '../models/Product'
import ProductList from '../features/catalog/components/ProductList'
import { useEffect, useState } from 'react'
import Navbar from '../components/ui/Navbar'
const Catalog = () => {


    const [products, setProducts] = useState<Product[]>([]);

    const host = "https://localhost:7014/api";

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await fetch(host + '/Products');
        const data = await res.json();
        setProducts(data);
    }


    return (
        <>
            <Navbar />            
            <ProductList products={products} />
        </>
    )
}

export default Catalog;