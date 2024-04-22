import * as React from "react"
import { IconOptions } from "../../../../types"

const SvgComponent = (props:IconOptions) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
     fill="transparent"
     viewBox="0 0 24 24"

    {...props}
  >
    <rect
      width={18}
      height={3}
      x={3}
      y={3}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={1}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6h16v11H4zM21 17H3M12 17v2"
    />
    <circle
      cx={12}
      cy={20.5}
      r={1.5}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 11 8 13M16 10l-3 3M13 13l-2.5-2M16 12v-2h-2"
    />
  </svg>
)
export default SvgComponent
