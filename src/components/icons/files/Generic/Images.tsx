import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.99 21.99" {...props}>
    <defs>
      <style>
        {
          ".mediabrowsericon-2{fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.7px}"
        }
      </style>
    </defs>
    <g id="Calque_2" data-name="Calque 2">
      <g id="Calque_1-2" data-name="Calque 1">
        <path
          d="M18.46 16.65H6.31A1.7 1.7 0 0 1 4.61 15V2.13"
          className="mediabrowsericon-2"
        />
        <path
          d="M15 20.12H2.85a1.7 1.7 0 0 1-1.69-1.7V4.82M8.08 11.47V3.56a1.69 1.69 0 0 1 1.69-1.69h9.36a1.7 1.7 0 0 1 1.7 1.69v7.91a1.7 1.7 0 0 1-1.7 1.69H9.77a1.69 1.69 0 0 1-1.69-1.69Z"
          className="mediabrowsericon-2"
        />
        <path
          d="m13.54 10.61-1.46-2.55-2.55 3.64h9.84l-3.28-5.1Z"
          className="mediabrowsericon-3"
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
