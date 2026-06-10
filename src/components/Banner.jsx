import { Carousel } from 'react-bootstrap'

const slides = [
    {
        title: 'FASHION COLLECTION 2026',
        description: 'Discover the latest fashion trends for 2026',
        image:
            'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=80',
    },
    {
        title: 'SUMMER SALE UP TO 50%',
        description: 'Enjoy special discounts on selected products',
        image:
            'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80',
    },
    {
        title: 'NEW ARRIVALS',
        description: 'Explore our newest clothing collection.',
        image:
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80',
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
