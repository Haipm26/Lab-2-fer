function IconBase({ children, className = '', ...props }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      focusable="false"
      height="1em"
      viewBox="0 0 512 512"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  )
}

function FaShoppingCart(props) {
  return (
    <IconBase {...props}>
      <path d="M96 0c11.5 0 21.4 8.2 23.6 19.5L125.9 48H472c14.9 0 26.2 13.4 23.7 28.1l-42.7 256c-1.9 11.6-12 19.9-23.7 19.9H168c-11.5 0-21.4-8.2-23.6-19.5L96 96H24C10.7 96 0 85.3 0 72S10.7 48 24 48h52.5L72.4 28.5C69.5 13.7 80.8 0 96 0Zm72 400a56 56 0 1 1 0 112 56 56 0 1 1 0-112Zm224 0a56 56 0 1 1 0 112 56 56 0 1 1 0-112Z" />
    </IconBase>
  )
}

function FaCheck(props) {
  return (
    <IconBase {...props}>
      <path d="M173.9 439.4 7 272.5c-9.4-9.4-9.4-24.6 0-33.9l33.9-33.9c9.4-9.4 24.6-9.4 33.9 0l116 116L437.2 74.2c9.4-9.4 24.6-9.4 33.9 0l33.9 33.9c9.4 9.4 9.4 24.6 0 33.9L207.8 439.4c-9.3 9.4-24.5 9.4-33.9 0Z" />
    </IconBase>
  )
}

export { FaCheck, FaShoppingCart }
