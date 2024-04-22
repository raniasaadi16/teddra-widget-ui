import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
  
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 25.11 25.11"
    {...props}
  >
    <defs>
      <style>{".broadcast{fill-rule:nonzero}"}</style>
    </defs>
    <g id="Plan_x0020_1">
      <path
        id="_1805407838480"
        d="M25.11 25.11H0V0h25.11z"
        style={{
          fill: "none",
          fillRule: "nonzero",
        }}
      />
      <g id="_1805407840400">
        <path
          d="M18.84 25.11H6.29v-2.09c0-2.98 2.7-5.23 6.28-5.23s6.27 2.25 6.27 5.23v2.09zM8.38 23.02h8.37c0-1.82-1.76-3.14-4.18-3.14-2.43 0-4.19 1.32-4.19 3.14zM8.87 16.41c-1.44-1.85-1.33-4.52.37-6.21.89-.89 2.07-1.38 3.33-1.38 1.25 0 2.44.49 3.33 1.38 1.69 1.69 1.8 4.36.36 6.21.68.27 1.3.62 1.85 1.04 1.88-2.65 1.64-6.36-.73-8.73-1.29-1.29-3-2-4.81-2-1.82 0-3.53.71-4.81 2-2.38 2.37-2.62 6.08-.74 8.73.55-.42 1.17-.77 1.85-1.04z"
          className="broadcast"
        />
        <path
          d="M5.84 18.57c-2.42-3.28-2.16-7.92.81-10.89 3.26-3.26 8.57-3.26 11.84 0 2.96 2.97 3.22 7.61.8 10.89.49.57.88 1.21 1.15 1.9 3.59-4.1 3.43-10.36-.48-14.27-4.07-4.08-10.71-4.08-14.79 0-3.91 3.91-4.06 10.17-.48 14.27.28-.69.66-1.33 1.15-1.9z"
          className="broadcast"
        />
        <path
          d="M12.57 16.74c-1.73 0-3.14-1.41-3.14-3.14 0-1.73 1.41-3.14 3.14-3.14 1.73 0 3.13 1.41 3.13 3.14 0 1.73-1.4 3.14-3.13 3.14zm0-4.18c-.58 0-1.05.47-1.05 1.04 0 .58.47 1.05 1.05 1.05a1.046 1.046 0 0 0 0-2.09z"
          className="broadcast"
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
