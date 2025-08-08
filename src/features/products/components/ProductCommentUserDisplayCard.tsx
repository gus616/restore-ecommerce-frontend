import { User } from 'lucide-react'


type ProductCommentUserDisplayCardProps = {
    username: string;
}

const ProductCommentUserDisplayCard = ({username}: ProductCommentUserDisplayCardProps) => {
    return (
        <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors cursor-pointer">
                <User size={18} />                
            </div>
            <span className="text-sm">{username}</span>
        </div>
    )
}

export default ProductCommentUserDisplayCard