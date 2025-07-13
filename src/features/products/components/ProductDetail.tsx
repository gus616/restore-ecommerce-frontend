import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import ProductActions from './ProductActions'
import type { Product } from '../../../models/Product'
import Divider from '../../../components/ui/Divider'
import ProductRating from './ProductRating'
import { CircleUser, User, UserRound } from 'lucide-react'
import ProductUserComment from './ProductUserCommentContainer'
import ProductUserCommentContainer from './ProductUserCommentContainer'


type ProductDetailProps = {
    product: Product
}

const ProductDetail = ({ product }: ProductDetailProps) => {

    const reviewComments = [
        {
            userName: 'John Doe',
            rating: 4,
            date: '2023-10-01',
            reviewDescription: 'Great product! Highly recommend it.\nThe build quality exceeded my expectations and the customer support was very responsive. I have used it daily for a month and it still works like new. Would definitely purchase again.',
            isVerified: true,
        },
        {
            userName: 'Jane Smith',
            rating: 5,
            date: '2023-10-02',
            reviewDescription: 'Excellent quality and fast shipping.\nThe packaging was secure and the item arrived earlier than expected. I appreciate the attention to detail and the included instructions made setup a breeze.',
            isVerified: false,
        },
        {
            userName: 'Aisha Khan',
            rating: 5,
            date: '2023-10-03',
            reviewDescription: 'منتج رائع وخدمة ممتازة. أنصح به بشدة!\nوصل المنتج في الوقت المحدد وكان مطابقًا للوصف تمامًا. خدمة العملاء كانت متعاونة جدًا وأجابت على جميع استفساراتي بسرعة.',
            isVerified: true,
        },
        {
            userName: 'Carlos Hernández',
            rating: 4,
            date: '2023-10-04',
            reviewDescription: '¡Muy buen producto, llegó rápido y en buen estado!\nLa calidad es superior a otros productos similares que he comprado antes. Sin duda lo recomendaría a mis amigos y familiares.',
            isVerified: false,
        },
        {
            userName: 'Mei Lin',
            rating: 5,
            date: '2023-10-05',
            reviewDescription: '质量很好，物流也很快，非常满意！\n使用了一段时间后，感觉非常值得购买。客服态度也很好，解答了我很多问题。以后还会再来购买。',
            isVerified: true,
        },
        {
            userName: 'Priya Patel',
            rating: 3,
            date: '2023-10-06',
            reviewDescription: 'Good value for money, but packaging could be better.\nThe product itself works as described, but the box was slightly damaged upon arrival. Overall, I am satisfied with the purchase given the price.',
            isVerified: false,
        },
        {
            userName: 'Jean Dupont',
            rating: 4,
            date: '2023-10-07',
            reviewDescription: 'Produit conforme à la description, je recommande.\nLivraison rapide et service client réactif. J\'utilise ce produit tous les jours et il répond parfaitement à mes besoins.',
            isVerified: true,
        }
    ];

    return (
        <>
            <div className="p-4 max-w-10xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Product Gallery Component */}
                    <div className="md:col-span-4">
                        <ProductGallery images={product.images} />
                    </div>


                    {/* Product Info Component */}
                    <div className="md:col-span-6 space-y-6">

                        <ProductInfo product={product} /></div>
                    {/* Product Actions Component */}
                    <div className="md:col-span-2">
                        <ProductActions product={product} />
                    </div>
                </div>
            </div>

            {/*other clients also saw */}

            {/*Brands*/}
            <Divider />
            {/*Comment and review section*/}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-30 p-4">
                <div className="md:col-span-4">
                    <ProductRating />
                </div>
                <div className="md:col-span-8">
                    <h2 className="text-2xl font-semibold mb-4">Best Reviews</h2>
                    {/* Placeholder for comments and reviews */}

                    {
                        reviewComments.map((comment, index) => (
                            <ProductUserCommentContainer
                                key={index}
                                userName={comment.userName}
                                rating={comment.rating}
                                date={comment.date}
                                reviewDescription={comment.reviewDescription}
                                isVerified={comment.isVerified}
                            />
                        ))
                    }
                </div>
            </div>
        </>

    )
}

export default ProductDetail