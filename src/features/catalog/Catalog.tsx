import type { Product } from '../../models/Product'
import ProductList from './ProductList'


type CatalogProps = {
    products: Product[]
}

const Catalog = ({ products }: CatalogProps) => {

    return(
        <ProductList products={products} />
    )
}

export default Catalog;