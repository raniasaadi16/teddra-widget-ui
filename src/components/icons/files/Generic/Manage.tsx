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
      d="M11.4998 20H5.12522C4.36873 20 3.73063 19.4367 3.6368 18.686L3.0118 13.6861C2.95843 13.2591 3.09096 12.8298 3.3757 12.5073C3.66044 12.1847 4.06997 12 4.50022 12H10.8748C11.6313 12 12.2694 12.5633 12.3632 13.314L12.9882 18.314C13.0415 18.7409 12.909 19.1702 12.6243 19.4927C12.3395 19.8153 11.93 20 11.4998 20Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.7056 20H11.3008"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={14.5}
      cy={5.75}
      r={2.75}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 12H18C19.6569 12 21 13.3431 21 15V16C21 16.5523 20.5523 17 20 17H17"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
