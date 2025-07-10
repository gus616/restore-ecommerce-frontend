import { Link, useNavigate } from 'react-router-dom';
import type { Product } from '../../../models/Product'
import { formatCurrency } from '../../../utils/utils';


type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  //random rating generator
  const generateRandomRating = () => {
    const rating = Math.floor(Math.random() * 5) + 1; // Generates a number between 1 and 5
    const reviews = Math.floor(Math.random() * 1000) + 100; // Generates a number between 100 and 1100
    return { rating, reviews };
  };


  const { rating, reviews } = generateRandomRating();


  const navigateToDetail = (id: number) => {
    navigate(`/detail/${id}`, { state: { productId: id } });
  };

  return (
    <div className="w-60 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 mb-2">
      <Link to={`/detail/${product.id}`} className="block">
        <img
          src={product.pictureUrl}
          alt="Product"
          className="w-full h-60 object-contain p-4"
        />
      </Link>

      <div className="px-4 pb-4">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800 hover:text-blue-600 leading-tight line-clamp-2 mt-1 cursor-pointer"
          onClick={() => navigateToDetail(product.id)}
          >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-sm mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>{i < rating ? '⭐' : '☆'}</span>
          ))}
          <span className="text-gray-600 text-xs ml-2">({reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-2">
          <span className="text-lg font-semibold text-gray-900">{formatCurrency(product.price)}</span>
          <span className="text-sm text-gray-500 line-through ml-2">${formatCurrency(product.price + (product.price * 0.20))}</span>
        </div>

        {/* Prime badge / shipping */}
        <div className="mt-1 flex items-center gap-1">
          <img
            src="https://www.citypng.com/public/uploads/preview/prime-amazon-logo-icon-701751694791861yc1d3bmoov.png"
            alt="Prime"
            className="h-4"
          />
          <span className="text-xs text-gray-500">FREE delivery</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard 