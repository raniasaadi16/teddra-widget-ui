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
      d="M19 21H16C14.895 21 14 20.105 14 19V14C14 12.895 14.895 12 16 12H19C20.105 12 21 12.895 21 14V19C21 20.105 20.105 21 19 21Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 9H16C14.895 9 14 8.105 14 7V5C14 3.895 14.895 3 16 3H19C20.105 3 21 3.895 21 5V7C21 8.105 20.105 9 19 9Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H8C9.105 3 10 3.895 10 5V10C10 11.105 9.105 12 8 12H5C3.895 12 3 11.105 3 10V5C3 3.895 3.895 3 5 3Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 15H8C9.105 15 10 15.895 10 17V19C10 20.105 9.105 21 8 21H5C3.895 21 3 20.105 3 19V17C3 15.895 3.895 15 5 15Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
