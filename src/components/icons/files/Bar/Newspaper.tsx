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
      d="M12 9.99923H15.0013"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6.99826H15.0013"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={5.99744}
      y={6.99805}
      width={3.00125}
      height={3.00125}
      rx={0.5}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.99744 13.5007H15.0012"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0012 17.0022H5.99744"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0025 7.99867H19.0029C20.1079 7.99867 21.0037 8.89447 21.0037 9.9995V19.0032C21.0037 20.1083 20.1079 21.0041 19.0029 21.0041H4.99705C3.89202 21.0041 2.99622 20.1083 2.99622 19.0032V4.99742C2.99622 3.89239 3.89202 2.99658 4.99705 2.99658H16.0016C17.1067 2.99658 18.0025 3.89239 18.0025 4.99742V21.0041"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
