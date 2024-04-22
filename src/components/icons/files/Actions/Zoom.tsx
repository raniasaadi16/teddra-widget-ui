import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.99 21.99" {...props}>
    <g data-name="Calque 2">
      <g data-name="Calque 1">
        <path
          d="M8.32 5.64a.52.52 0 0 1 .51-.43h1.62l.17 1a.55.55 0 0 0 .29.39l.1.06a.57.57 0 0 0 .49.06l1-.36 1 1.78-.8.65a.58.58 0 0 0-.19.46v.12a.55.55 0 0 0 .19.45l.8.65-1 1.78-1-.36a.57.57 0 0 0-.5.11l-.1.06a.57.57 0 0 0-.29.4l-.17 1H8.39l-.17-1a.57.57 0 0 0-.29-.4l-.1-.06a.59.59 0 0 0-.5-.06l-1 .36-1-1.78.8-.65a.55.55 0 0 0 .19-.45v-.15a.57.57 0 0 0-.19-.46l-.8-.65 1-1.78 1 .36a.59.59 0 0 0 .5-.06l.1-.06a.55.55 0 0 0 .29-.39l.1-.59Z"
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
        <path
          d="M10.79 9.33A1.37 1.37 0 1 1 9.42 8a1.37 1.37 0 0 1 1.37 1.33Z"
          className="zoom-3"
        />
        <path
          d="m21 21-5.77-5.77m0 0a8.34 8.34 0 1 0-5.89 2.44 8.3 8.3 0 0 0 5.88-2.45Z"
          style={{
            strokeWidth: "1.7px",
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
