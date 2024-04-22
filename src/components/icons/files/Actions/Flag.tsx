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
      d="M3.99679 4.5459V21.0037"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.99683 16.502C6.19809 15.2441 8.8667 15.1094 11.1835 16.1391L12.8168 16.865C15.1336 17.8947 17.8022 17.7599 20.0035 16.502V4.54604C17.8022 5.80391 15.1336 5.93869 12.8168 4.909L11.1835 4.18309C8.86671 3.1534 6.1981 3.28817 3.99683 4.54604"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
