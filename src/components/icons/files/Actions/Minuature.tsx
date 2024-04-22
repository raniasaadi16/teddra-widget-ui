import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.99 21.99" {...props}>
    <defs>
      <style>
        {
          ".minuatiriser-2{fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.7px}"
        }
      </style>
    </defs>
    <g id="Calque_2" data-name="Calque 2">
      <g id="Calque_1-2" data-name="Calque 1">
        <path d="M10.68 14.6h9.64" className="minuatiriser-2" />
        <rect
          width={9.96}
          height={9.12}
          x={10.37}
          y={11.88}
          className="minuatiriser-2"
          rx={1.5}
        />
        <path
          d="M2.18 4.78h15.76M5.06 1.28v2.83M8.36 1.28v2.83M17.94 8.88V2.42A1.43 1.43 0 0 0 16.51 1H3.09a1.43 1.43 0 0 0-1.43 1.42v9.8a1.43 1.43 0 0 0 1.43 1.43h4.09"
          className="minuatiriser-2"
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
