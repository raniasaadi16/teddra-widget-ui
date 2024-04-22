import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...props}>
    <defs>
      <style>
        {
          ".calandar-2{fill:none;stroke:currentColor;stroke-width:1.7px;stroke-miterlimit:10}"
        }
      </style>
    </defs>
    <g id="Calque_2" data-name="Calque 2">
      <g id="Calque_1-2" data-name="Calque 1">
        <path
          d="M6.21 9.9h2.35M9.79 9.9h2.35M6.21 12.68h2.35M9.79 12.68h2.35M13.44 9.9h2.35"
          className="calandar-2"
        />
        <path
          d="M5.17 1v2.5M16.83 1v2.5m4.17 15V5a1.5 1.5 0 0 0-1.5-1.5h-17A1.5 1.5 0 0 0 1 5v13.5A2.5 2.5 0 0 0 3.5 21h15a2.5 2.5 0 0 0 2.5-2.5m0-9.33v9.33"
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.7px",
          }}
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
