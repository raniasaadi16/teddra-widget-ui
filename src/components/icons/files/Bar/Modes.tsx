import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.99 21.99" {...props}>
    <g data-name="Calque 2">
      <g data-name="Calque 1">
        <path
          d="M21.86 20.3V8.92a1.56 1.56 0 0 0-1.57-1.56H15.5V14a1.56 1.56 0 0 1-1.56 1.57H7.35v4.73a1.56 1.56 0 0 0 1.56 1.57h11.38a1.57 1.57 0 0 0 1.57-1.57Z"
          className="skins-2"
        />
        <rect
          width={14.51}
          height={14.51}
          x={0.99}
          y={1.01}
          rx={1.5}
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeMiterlimit: 10,
            strokeWidth: "1.7px",
          }}
          transform="rotate(-90 8.25 8.26)"
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
