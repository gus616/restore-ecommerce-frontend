import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type {Product} from "../models/Product";
import Navbar from "../components/ui/Navbar";
import ProductDetail from "../features/products/components/ProductDetail";

const Product = () => {
  const {id}= useParams<{ id: string }>();  
  const [product, setProduct] = useState<Product>();


  useEffect(() => {
    if(id) {
      fetchProduct(id);
    }
  }, [id]);


  const fetchProduct = async (id: string) => {
    if(!id) return;
    const res = await fetch(`https://localhost:7014/api/Products/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }

    const data = await res.json();

    if (!data) {
      throw new Error('Product not found');
    }

    setProduct(data);
  };

  return (
    <div>
        <Navbar />
        <ProductDetail />
    </div>
  )
}

export default Product