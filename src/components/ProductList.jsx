import { Row } from 'react-bootstrap'
import products from '../data/product'
import ProductCard from './ProductCard'

function ProductList({ onAddToCart }) {
    return (
        <Row className="product-grid">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </Row>
    )
}

export default ProductList
