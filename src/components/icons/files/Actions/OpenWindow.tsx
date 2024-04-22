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
      d="M3 8H21"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.0049 5.49012L10.9999 5.49512L11.0049 5.50012L11.0099 5.49512L11.0049 5.49012"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.50488 5.49012L8.49988 5.49512L8.50488 5.50012L8.50988 5.49512L8.50488 5.49012"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.00488 5.49012L5.99988 5.49512L6.00488 5.50012L6.00988 5.49512L6.00488 5.49012"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 20H5C4.46952 20.0001 3.96073 19.7895 3.58563 19.4144C3.21052 19.0393 2.99985 18.5305 3 18V5C2.99985 4.46952 3.21052 3.96073 3.58563 3.58563C3.96073 3.21052 4.46952 2.99985 5 3H19C19.5305 2.99985 20.0393 3.21052 20.4144 3.58563C20.7895 3.96073 21.0001 4.46952 21 5V9"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={11}
      y={12}
      width={11}
      height={10}
      rx={2}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
