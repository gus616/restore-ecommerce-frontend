import type { Product } from '../models/Product'
import ProductList from '../features/catalog/components/ProductList'
import { useEffect, useState } from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import type { CatalogueFilter } from '../models/CatalogueFilter'
import FilterMenu from '../features/catalog/components/FilterMenu'
const Catalog = () => {


    const [products, setProducts] = useState<Product[]>([]);

    const [filters, setFilters] = useState<CatalogueFilter>();

    const host = "https://localhost:7014/api";

    useEffect(() => {
        fetchProducts();
        fetchFilters();
    }, []);

    const fetchProducts = async () => {
        const res = await fetch(host + '/Products');
        const data = await res.json();
        setProducts(data);
    }

    const fetchFilters = async () => {
        const res = await fetch(host + '/Products/filters');
        if (!res.ok) {
            throw new Error('Failed to fetch filters');
        }

        const data = await res.json();
        console.log(data);
        setFilters(data);
    };

    return (
        <>
            <Navbar />
            <div className="w-full grid md:grid-cols-12 grid-cols-1 gap-2 px-10 py-15">
                <div className="md:col-span-2 sm:flex sm:flex-col sm:items-start sm:justify-start hidden">
                    <FilterMenu filter={filters} />
                </div>
                <div className="md:col-span-10">
                    <ProductList products={products} />
                </div>

            </div>
            <Footer showGoToTop={false} />
        </>
    )
}

export default Catalog;