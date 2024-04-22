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
    viewBox="0 0 66.21 66.21"
    {...props}
  >
    <defs>
      <style>{".openpanel{fill-rule:nonzero}"}</style>
    </defs>
    <g id="Plan_x0020_1">
      <path
        id="_1805400544864"
        d="M66.21 66.21H0V0h66.21z"
        style={{
          fill: "none",
          fillRule: "nonzero",
        }}
      />
      <g id="_1805400548512">
        <path
          d="M11.04 11.04h13.79V5.52H11.04c-3.05 0-5.52 2.47-5.52 5.52v44.14c0 3.04 2.47 5.51 5.52 5.51h13.79v-5.51H11.04V11.04zM46.9 5.52h-5.52v5.52h5.52zM41.38 60.69h5.52v-5.51h-5.52zM55.18 5.52h-2.76v5.52h2.76v2.75h5.51v-2.75c0-3.05-2.47-5.52-5.51-5.52zM55.18 55.18h-2.76v5.51h2.76c3.04 0 5.51-2.47 5.51-5.51v-2.76h-5.51v2.76zM55.18 24.83h5.51v-5.52h-5.51zM55.18 46.9h5.51v-5.52h-5.51zM55.18 35.86h5.51v-5.51h-5.51z"
          className="openpanel"
        />
        <path
          d="m36.67 24.02 3.57 3.57h-9.89c-6.09 0-11.04 4.95-11.04 11.03h5.52c0-3.04 2.47-5.51 5.52-5.51h9.89l-3.57 3.56 3.9 3.9L50.8 30.35 40.57 20.12l-3.9 3.9zM35.86 5.52h-5.51v13.79h5.51zM30.35 60.69h5.51V41.38h-5.51z"
          className="openpanel"
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
