import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.447 11.893L8.447 11.393C8.786 11.224 9 10.877 9 10.499V8.535C9 8.201 9.167 7.888 9.445 7.703L11.554 6.298C11.833 6.112 12 5.8 12 5.466V4C12 3.448 11.552 3 11 3H4C3.448 3 3 3.448 3 4V5.466C3 5.8 3.167 6.112 3.445 6.298L5.554 7.703C5.833 7.889 6 8.201 6 8.535V10.998C6 11.742 6.782 12.226 7.447 11.893Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 16V19C6 20.105 6.895 21 8 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3H16"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 9H17"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13H17"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 17H17"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
