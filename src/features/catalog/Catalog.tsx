import type { Product } from '../../models/Product'


type CatalogProps = {
    products: Product[]
}

const Catalog = ({ products }: CatalogProps) => {

    if (products?.length === 0) return <h1 className="text-3xl">No products to show.</h1>

    return (
        <ul>
            {
                products?.map((product) =>
                (
                    <li className="text-purple-500 text-2xl">{product.name} - {product.price}</li>
                ))
            }
        </ul>
    )
}

export default Catalog;