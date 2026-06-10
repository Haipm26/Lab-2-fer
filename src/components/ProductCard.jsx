import { useState } from 'react'
import { Badge, Button, Card, Col } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'

function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddClick = () => {
    onAddToCart(product)
    setIsAdded(true)
  }

  return (
    <Col md={6} lg={4} className="product-column">
      <Card className="product-card">
        <div className="product-image-wrap">
          <Card.Img variant="top" src={product.image} alt={product.name} />
          <Badge bg="dark" className="product-category">
            {product.category}
          </Badge>
        </div>
        <Card.Body>
          <div className="product-info">
            <Card.Title>{product.name}</Card.Title>
            <Badge bg="success">{product.status}</Badge>
          </div>
          <Card.Text className="product-price">{product.price}</Card.Text>
          <Button
            variant={isAdded ? 'secondary' : 'success'}
            disabled={isAdded}
            onClick={handleAddClick}
            className="add-cart-button"
          >
            {isAdded ? (
              <>
                <FaCheck /> Added to Cart
              </>
            ) : (
              'Add to Cart'
            )}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard
