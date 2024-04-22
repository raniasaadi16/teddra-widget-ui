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
      d="M21 5V7.75C21 8.855 20.105 9.75 19 9.75H5C3.895 9.75 3 8.855 3 7.75V5C3 3.895 3.895 3 5 3H19C20.105 3 21 3.895 21 5Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 16.25V19C21 20.105 20.105 21 19 21H5C3.895 21 3 20.105 3 19V16.25C3 15.145 3.895 14.25 5 14.25H19C20.105 14.25 21 15.145 21 16.25Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
