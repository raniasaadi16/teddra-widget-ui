import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.01001 17H15.99"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.01001 13H15.99"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 9H12.535C12.201 9 11.888 8.833 11.703 8.555L10.297 6.446C10.111 6.167 9.799 6 9.465 6H5C3.895 6 3 6.895 3 8V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V11C21 9.895 20.105 9 19 9Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 6V5C5 3.895 5.895 3 7 3H17C18.105 3 19 3.895 19 5V9"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
