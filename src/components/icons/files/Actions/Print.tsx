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
      d="M7 8V4C7 3.448 7.448 3 8 3H16C16.552 3 17 3.448 17 4V8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 17H5C3.895 17 3 16.105 3 15V10C3 8.895 3.895 8 5 8H19C20.105 8 21 8.895 21 10V15C21 16.105 20.105 17 19 17H17"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 13.7998H17V19.9998C17 20.5518 16.552 20.9998 16 20.9998H8C7.448 20.9998 7 20.5518 7 19.9998V13.7998Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 11H8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
