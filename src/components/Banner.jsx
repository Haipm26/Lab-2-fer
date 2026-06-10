import { Carousel } from 'react-bootstrap'

import img1 from '../assets/navbarimg1.jpg'
import img2 from '../assets/navbarimg2.jpg'
import img3 from '../assets/navbarimg3.jpg'


const slides = [
    {
        title: 'FASHION COLLECTION 2026',
        description: 'Discover the latest fashion trends for 2026',
        image:
            img1,
    },
    {
        title: 'SUMMER SALE UP TO 50%',
        description: 'Enjoy special discounts on selected products',
        image:
            img2,
    },
    {
        title: 'NEW ARRIVALS',
        description: 'Explore our newest clothing collection.',
        image:
            img3,
    },
]

function Banner() {
    return (
        <section className="hero-banner" id="home">
            <Carousel controls indicators interval={3500}>
                {slides.map((slide) => (
                    <Carousel.Item key={slide.title}>
                        <img className="banner-image" src={slide.image} alt={slide.title} />
                        <Carousel.Caption>
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}

export default Banner
