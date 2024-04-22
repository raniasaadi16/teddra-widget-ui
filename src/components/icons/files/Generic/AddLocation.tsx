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
      d="M11 20H19C20.1046 20 21 19.1046 21 18V8.94C21 7.83543 20.1046 6.94 19 6.94H12.5291C12.1981 6.94 11.8886 6.7762 11.7024 6.50253L10.2974 4.43747C10.1111 4.16379 9.80157 3.99999 9.47054 4H5C3.89543 4 3 4.89543 3 6V12"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.75 14V19.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 16.75H8.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
