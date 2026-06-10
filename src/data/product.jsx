import blouse from '../assets/blouse.jpg'
import dress from '../assets/dress.jpg'
import hoodie from '../assets/hoodie.avif'
import jacket from '../assets/jacket.jpg'
import jeans from '../assets/jeans.jpg'
import sneaker from '../assets/sneaker.jpg'


const products = [
    {
        id: 1,
        name: "Men's Hoodie",
        price: '450.000 VND',
        status: 'In Stock',
        category: 'Men',
        image:
            hoodie,
    },
    {
        id: 2,
        name: "Women's Summer Dress",
        price: '520.000 VND',
        status: 'New Arrival',
        category: 'Women',
        image:
            dress,
    },
    {
        id: 3,
        name: 'Denim Jacket',
        price: '690.000 VND',
        status: 'Best Seller',
        category: 'Men',
        image:
            jacket,
    },
    {
        id: 4,
        name: 'Classic Sneakers',
        price: '780.000 VND',
        status: 'In Stock',
        category: 'Unisex',
        image:
            sneaker,
    },
    {
        id: 5,
        name: 'Silk Blouse',
        price: '410.000 VND',
        status: 'Limited',
        category: 'Women',
        image:
            blouse,
    },
    {
        id: 6,
        name: 'Slim Fit Jeans',
        price: '560.000 VND',
        status: 'In Stock',
        category: 'Men',
        image:
            jeans,
    },
]

export default products
