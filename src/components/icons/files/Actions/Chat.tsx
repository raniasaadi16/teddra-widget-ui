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
      d="M15 19H11C9.895 19 9 18.105 9 17V11.5C9 10.395 9.895 9.5 11 9.5H19C20.105 9.5 21 10.395 21 11.5V17C21 18.105 20.105 19 19 19H18V21L15 19Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.609 9.5V5.435C17.609 4.09 16.519 3 15.174 3H5.435C4.09 3 3 4.09 3 5.435V12.131C3 13.476 4.09 14.566 5.435 14.566H6.652V17L9 15.435"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
