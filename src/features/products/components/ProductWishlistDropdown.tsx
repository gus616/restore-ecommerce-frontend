import ProductWishlistItem from './ProductWishlistItem'
import Divider from '../../../components/ui/Divider'
import { Plus } from 'lucide-react'



const ProductWishlistDropdown = () => {

    const wishlist = [
        { id: 1, name: 'Videogames List', privacy: 'Private', imgUrl: 'https://media.wired.com/photos/62feb60bcea7c0581e825cb0/3:2/w_2560%2Cc_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg' },
        { id: 2, name: 'Books Collection', privacy: 'Public', imgUrl: 'https://hips.hearstapps.com/hmg-prod/images/edc100124gambrel-006-66e0bc34ac150.jpg?crop=0.688xw:1.00xh;0.276xw,0&resize=1120:*' },
        { id: 3, name: 'Music Favorites', privacy: 'Private', imgUrl: 'https://pp-blog.paperpal.com/wp-content/uploads/2023/05/pexels-pixabay-164853-scaled.jpg' },
        { id: 4, name: 'Movies to Watch', privacy: 'Public', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/The_Fantastic_Four_First_Steps_poster.jpg/250px-The_Fantastic_Four_First_Steps_poster.jpg' },
        { id: 5, name: 'Tech Gadgets', privacy: 'Public', imgUrl: 'https://image.made-in-china.com/202f0j00lMKqJoVWPCkF/Ulefone-Note-16-PRO-6-52-Inch-128GB-Cellphone-Fashion-Smart-Phone-4G-Celulares-Mobile-Phone.webp' },
        { id: 7, name: 'Fitness Clothes', privacy: 'Private', imgUrl: 'https://cdn.shopify.com/s/files/1/0156/6146/files/PowerT-Shirt-GSBlack-A4A9Q-BB2J-0266_632f8f71-69b6-403a-953a-fd05405824de.jpg?v=1742825795' },
        { id: 8, name: 'Furniture', privacy: 'Public', imgUrl: 'https://m.media-amazon.com/images/I/71MRtQh6LHL._UF894,1000_QL80_.jpg' }
    ]

    return (
        <div className="absolute top-full left-0 w-full border border-black border-t-0 p-2 z-10 bg-white rounded-b-md">
            <div className="text-xs text-gray-600 scroll-m-0 ">
                <ul className="flex flex-col gap-2 scroll-auto scroll-m-3 overflow-y-auto max-h-60 scrollbar-thin">
                    {
                        wishlist.map((list, index) => (
                            <ProductWishlistItem key={index} list={list} />
                        ))
                    }
                </ul>
                <Divider />
                <div className="grid grid-cols-6 items-center py-1 px-3 ">
                    <div className="cols-span-1">
                        <Plus size={14} className="text-gray-700 font-bold" />
                    </div>
                    <div className="col-span-5 flex items-center justify-start">
                        <span className="text-xs text-[#2162a1] hover:[#2162a1] hover:underline transition-colors cursor-pointer">
                            Create another Wish list
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductWishlistDropdown