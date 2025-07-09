import { useEffect, useState } from 'react';
import type { Product } from '../models/Product';
import Catalog from '../features/catalog/components/Catalog';

function App() {

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

  if (products?.length === 0) return  <h2>No products to show</h2> 

  return (
    <>  
      <Catalog products={products} />
    </>
  )
}

export default App
