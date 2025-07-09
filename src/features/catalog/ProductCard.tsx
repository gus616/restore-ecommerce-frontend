import type { Product } from '../../models/Product'
import { formatCurrency } from '../../utils/utils';


type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
<div className="w-60 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 mb-2">
      <a href="#">
        <img
          src="https://m.media-amazon.com/images/I/81KpddXdBYL._AC_SX679_.jpg"
          alt="Product"
          className="w-full h-60 object-contain p-4"
        />
      </a>

      <div className="px-4 pb-4">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800 hover:text-blue-600 leading-tight line-clamp-2 mt-1">
          {product.description}
        </h3>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-sm mt-1">
          <span>⭐⭐⭐⭐☆</span>
          <span className="text-gray-600 text-xs ml-2">(1234)</span>
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