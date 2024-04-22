import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...props}>
    <g data-name="Calque 2">
      <g data-name="Calque 1">
        <path
          d="M21.11 7.78v11.77a1.39 1.39 0 0 1-1.39 1.39H2.28a1.39 1.39 0 0 1-1.39-1.39V7.78Zm-20.22 0V2.45a1.39 1.39 0 0 1 1.39-1.39h17.44a1.39 1.39 0 0 1 1.39 1.39v5.33"
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeMiterlimit: 10,
            strokeWidth: "1.7px",
          }}
        />
        <rect
          width={2}
          height={2}
          x={3.25}
          y={3.42}
          className="browser-3"
          rx={0.43}
        />
        <rect
          width={2}
          height={2}
          x={6.83}
          y={3.42}
          className="browser-3"
          rx={0.43}
        />
        <rect
          width={2}
          height={2}
          x={10.4}
          y={3.42}
          className="browser-3"
          rx={0.43}
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
