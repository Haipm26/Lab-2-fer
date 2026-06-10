import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product])
  }

  return (
    <div className="store-app">
      <Header cartCount={cartItems.length} />
      <main>
        <Banner />
        <Container className="products-section" id="products">
          <div className="section-heading">
            <span className="section-kicker">Featured styles</span>
            <h1>Shop Fashion Collection</h1>
            <p>
              Fresh everyday outfits, seasonal pieces, and polished essentials
              for men and women.
            </p>
          </div>
          <ProductList onAddToCart={handleAddToCart} />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
