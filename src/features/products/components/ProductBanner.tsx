import React from 'react'
import banner from '../../../assets/banner.jpg'

const ProductBanner = () => {
    return (
        <div className="w-full h-64 rounded-lg overflow-hidden">
            <img src={banner} alt="banner" className="max-w-xl w-full h-auto  object-cover rounded-lg" />
        </div>
    )
}

export default ProductBanner