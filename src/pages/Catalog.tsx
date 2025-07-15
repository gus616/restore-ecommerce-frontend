import ProductList from '../features/catalog/components/ProductList'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import FilterMenu from '../features/catalog/components/FilterMenu'
import { useGetFiltersQuery, useGetProductsQuery } from '../features/api/catalogApi'
const Catalog = () => {

    const { data: products, isLoading, isError } = useGetProductsQuery();

    const { data: filters } = useGetFiltersQuery();

    /* 
    Old implementation using fetch API
        const [products, setProducts] = useState<Product[]>([]);
    
        const [filters, setFilters] = useState<CatalogueFilter>(); 
        
        const host = "https://localhost:7014/api"; 
    /*     useEffect(() => {
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
        }; */

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (isError) {
        return <div className="flex justify-center items-center h-screen">Error loading products</div>;
    }

    if (!products || !filters) {
        return <div className="flex justify-center items-center h-screen">No products available</div>;
    }

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
            <Footer showGoToTop={true} />
        </>
    )
}

export default Catalog;