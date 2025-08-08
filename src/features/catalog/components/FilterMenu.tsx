import type { CatalogueFilter } from '../../../models/CatalogueFilter'
import ProductStarRatingStarsContainer from '../../products/components/ProductStarRatingStarsContainer'
import { formatCurrency } from '../../../utils/utils'
import { Checkbox, Slider } from '@mui/material'

type FilterMenuProps = {
  filter?: CatalogueFilter
}

const FilterMenu = ({ filter }: FilterMenuProps) => {
  return (
    <div className="w-full flex flex-col items-start justify-start bg-white p-4 shadow-md rounded-lg">

      {/* Delivery Filter */}
      <h2 className="text-lg font-semibold mb-4">Delivery</h2>
      <div className="flex gap-2 items-center justify-center">
        <Checkbox />
        <label className="text-sm text-center">All Free</label>
      </div>

      {/* Categories */}

      <h2 className="text-md font-semibold mb-4 mt-6">Categories</h2>
      {
        filter?.types.map((category, i) => (
          <div key={i} className="flex gap-2 items-center justify-center">
            <label className="text-sm text-center hover:text-orange-500 hover:underline cursor-pointer">{category}</label>
          </div>
        ))
      }


      {/* Brands */}
      <h2 className="text-md font-semibold mb-4 mt-6">Brands</h2>
      {
        filter?.brands.map((brand, i) => (
          <div key={i} className="flex gap-2 items-center justify-center">
            <label className="text-sm text-center hover:text-orange-500 hover:underline cursor-pointer">{brand}</label>
          </div>
        ))
      }

      {/* Ratings */}
      <div className="mt-6">
        <h2 className="text-md font-semibold mb-4">Customer reviews</h2>
        <ProductStarRatingStarsContainer rating={4} isReview={true} />
      </div>

      {/* Price Range */}
      <div className="mt-6">
        <h2 className="text-md font-semibold mb-2">Price</h2>
        <h3 className="text-md font-semibold mb-4">{formatCurrency(filter?.minPrice || 0)} - {formatCurrency(filter?.maxPrice || 0)}</h3>

        {/* Price Slider 008585  */}

        <Slider
          aria-label="price-range"
          defaultValue={30}
          getAriaValueText={(value: number) => `${value}$`}
          sx={{color: "#008585"}} />
      </div>

      {/*All discounts */}

      <div className="mt-6">
        <h2 className="text-md font-semibold mb-4">All discounts</h2>
        <div className="flex gap-2 items-center justify-center">
          <Checkbox />
          <label className="text-sm text-center">10% or more</label>
        </div>
        </div>
    </div>
  )
}

export default FilterMenu