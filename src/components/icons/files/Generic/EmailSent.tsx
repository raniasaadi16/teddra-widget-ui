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
      d="M10.481 18.71L21.468 12.878C22.177 12.502 22.177 11.49 21.468 11.113L10.497 5.29C9.669 4.85 8.741 5.68 9.092 6.546L11.281 11.946L9.074 17.456C8.728 18.323 9.655 19.148 10.481 18.71Z"
      stroke="currentColor"
      strokeWidth={1.5036}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.28 11.95L22 12"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 15H5.6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12H5.6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 9H5.6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
