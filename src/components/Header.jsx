import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../assets/logoshop.jpg'

function Header({ cartCount }) {
    return (
        <Navbar className="store-navbar" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="brand-mark">
                    {/* <span className="brand-icon">{logo}</span> */}
                    <img src={logo} alt="" width={60} height={60} />
                    <span>Shop Fashion</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="fashion-navbar" />
                <Navbar.Collapse id="fashion-navbar">
                    <Nav className="nav-links">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#products">Men</Nav.Link>
                        <Nav.Link href="#products">Women</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <div className="cart-status" aria-label={`${cartCount} items in cart`}>
                        <FaShoppingCart />
                        <span>Cart</span>
                        <Badge bg="light" text="dark">
                            {cartCount}
                        </Badge>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
