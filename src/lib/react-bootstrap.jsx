import { Children, cloneElement, createContext, useContext, useEffect, useMemo, useState } from 'react'

const NavbarContext = createContext(null)

const joinClasses = (...classes) => classes.filter(Boolean).join(' ')

function Container({ children, className = '', fluid = false, ...props }) {
  return (
    <div className={joinClasses(fluid ? 'container-fluid' : 'container', className)} {...props}>
      {children}
    </div>
  )
}

function Row({ children, className = '', ...props }) {
  return (
    <div className={joinClasses('row', className)} {...props}>
      {children}
    </div>
  )
}

function Col({ children, className = '', xs, md, lg, ...props }) {
  const classes = ['col']

  if (xs) classes.push(`col-${xs}`)
  if (md) classes.push(`col-md-${md}`)
  if (lg) classes.push(`col-lg-${lg}`)

  return (
    <div className={joinClasses(...classes, className)} {...props}>
      {children}
    </div>
  )
}

function Badge({ children, bg = 'primary', text, className = '', ...props }) {
  return (
    <span className={joinClasses('badge', `text-bg-${bg}`, text && `text-${text}`, className)} {...props}>
      {children}
    </span>
  )
}

function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button className={joinClasses('btn', `btn-${variant}`, className)} type="button" {...props}>
      {children}
    </button>
  )
}

function Card({ children, className = '', ...props }) {
  return (
    <div className={joinClasses('card', className)} {...props}>
      {children}
    </div>
  )
}

Card.Img = function CardImg({ className = '', variant, ...props }) {
  return <img className={joinClasses(variant === 'top' && 'card-img-top', className)} {...props} />
}

Card.Body = function CardBody({ children, className = '', ...props }) {
  return (
    <div className={joinClasses('card-body', className)} {...props}>
      {children}
    </div>
  )
}

Card.Title = function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={joinClasses('card-title', className)} {...props}>
      {children}
    </h3>
  )
}

Card.Text = function CardText({ children, className = '', ...props }) {
  return (
    <p className={joinClasses('card-text', className)} {...props}>
      {children}
    </p>
  )
}

function Navbar({ children, className = '', expand = 'lg', sticky, ...props }) {
  const [expanded, setExpanded] = useState(false)
  const value = useMemo(() => ({ expanded, setExpanded }), [expanded])

  return (
    <NavbarContext.Provider value={value}>
      <nav
        className={joinClasses('navbar', `navbar-expand-${expand}`, sticky && `sticky-${sticky}`, className)}
        {...props}
      >
        {children}
      </nav>
    </NavbarContext.Provider>
  )
}

Navbar.Brand = function NavbarBrand({ children, className = '', ...props }) {
  return (
    <a className={joinClasses('navbar-brand', className)} {...props}>
      {children}
    </a>
  )
}

Navbar.Toggle = function NavbarToggle({ className = '', ...props }) {
  const context = useContext(NavbarContext)

  return (
    <button
      className={joinClasses('navbar-toggler', className)}
      type="button"
      aria-expanded={context?.expanded ?? false}
      onClick={() => context?.setExpanded((isExpanded) => !isExpanded)}
      {...props}
    >
      <span className="navbar-toggler-icon" />
    </button>
  )
}

Navbar.Collapse = function NavbarCollapse({ children, className = '', ...props }) {
  const context = useContext(NavbarContext)

  return (
    <div className={joinClasses('navbar-collapse', context?.expanded && 'show', className)} {...props}>
      {children}
    </div>
  )
}

function Nav({ children, className = '', ...props }) {
  return (
    <div className={joinClasses('navbar-nav', className)} {...props}>
      {children}
    </div>
  )
}

Nav.Link = function NavLink({ children, className = '', ...props }) {
  return (
    <a className={joinClasses('nav-link', className)} {...props}>
      {children}
    </a>
  )
}

function Carousel({ children, controls = true, indicators = true, interval = 5000, className = '', ...props }) {
  const items = Children.toArray(children)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!interval || items.length < 2) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [interval, items.length])

  const goToPrevious = () => {
    setActiveIndex((index) => (index - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setActiveIndex((index) => (index + 1) % items.length)
  }

  return (
    <div className={joinClasses('carousel', className)} {...props}>
      <div className="carousel-inner">
        {items.map((item, index) =>
          cloneElement(item, {
            className: joinClasses(item.props.className, index === activeIndex && 'active'),
          }),
        )}
      </div>
      {controls && items.length > 1 && (
        <>
          <button className="carousel-control-prev" type="button" onClick={goToPrevious} aria-label="Previous slide">
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="carousel-control-next" type="button" onClick={goToNext} aria-label="Next slide">
            <span className="carousel-control-next-icon" />
          </button>
        </>
      )}
      {indicators && items.length > 1 && (
        <div className="carousel-indicators">
          {items.map((item, index) => (
            <button
              key={item.key ?? index}
              className={index === activeIndex ? 'active' : ''}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

Carousel.Item = function CarouselItem({ children, className = '', ...props }) {
  return (
    <div className={joinClasses('carousel-item', className)} {...props}>
      {children}
    </div>
  )
}

Carousel.Caption = function CarouselCaption({ children, className = '', ...props }) {
  return (
    <div className={joinClasses('carousel-caption', className)} {...props}>
      {children}
    </div>
  )
}

export { Badge, Button, Card, Carousel, Col, Container, Nav, Navbar, Row }
