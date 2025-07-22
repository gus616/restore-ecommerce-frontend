import { useParams } from "react-router-dom"
import type { Product } from "../../../models/Product";
import ProductDetail from "../components/ProductDetail";
import { useGetProductDetailQuery } from "../../api/catalogApi";
import Layout from "../../../layout/Layout";

const Product = () => {
  const { id } = useParams<{ id: string }>();


  const { data: product, isLoading, isError } = useGetProductDetailQuery(id || "");

/*  old implementation using fetch API
const [product, setProduct] = useState<Product>();


  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);


  const fetchProduct = async (id: string) => {
    if (!id) return;
    const res = await fetch(`https://localhost:7014/api/Products/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }

    const data = await res.json();

    if (!data) {
      throw new Error('Product not found');
    }

    setProduct(data);
  }; */

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (isError || !product) {
    return <div className="flex justify-center items-center h-screen">Error loading product</div>;
  }

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Product not found</div>;
  }


  return (
    <Layout bgColor="bg-white" shouldShowCart={true}>
      <div className="w-full container mx-auto px-10 py-15">
        {product && <ProductDetail product={product} />}
      </div>
    </Layout>
  )
}

export default Product