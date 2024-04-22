import * as React from "react"
import { IconOptions } from "../../../../types"
const SvgComponent = (props:IconOptions) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
  
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 60.72 60.72"
    {...props}
  >
    <defs>
      <style>{".moreinfo{fill-rule:nonzero}"}</style>
    </defs>
    <g id="Plan_x0020_1">
      <path
        id="_1807680190608"
        d="M60.72 60.72H0V0h60.72z"
        style={{
          fill: "none",
          fillRule: "nonzero",
        }}
      />
      <g id="_1807680190992">
        <path
          d="M30.36 0C19.05 0 7.59 3.48 7.59 10.12v30.36c0 6.15 9.81 9.58 20.24 10.06v5.12H15.18v5.06h30.36v-5.06H32.89v-5.12c10.43-.48 20.24-3.91 20.24-10.06V10.12C53.13 3.48 41.68 0 30.36 0zm0 5.06c11.5 0 17.71 3.59 17.71 5.06 0 1.47-6.21 5.06-17.71 5.06s-17.71-3.59-17.71-5.06c0-1.47 6.21-5.06 17.71-5.06zm0 40.48c-11.5 0-17.71-3.59-17.71-5.06v-3.54c4.39 2.33 11.07 3.54 17.71 3.54 6.64 0 13.32-1.21 17.71-3.54v3.54c0 1.47-6.21 5.06-17.71 5.06zm0-10.12c-11.5 0-17.71-3.59-17.71-5.06v-3.54c4.39 2.33 11.07 3.54 17.71 3.54 6.64 0 13.32-1.21 17.71-3.54v3.54c0 1.47-6.21 5.06-17.71 5.06zm0-10.12c-11.5 0-17.71-3.59-17.71-5.06V16.7c4.39 2.33 11.07 3.54 17.71 3.54 6.64 0 13.32-1.21 17.71-3.54v3.54c0 1.47-6.21 5.06-17.71 5.06zM50.6 55.66c-1.4 0-2.53 1.13-2.53 2.53s1.13 2.53 2.53 2.53 2.53-1.13 2.53-2.53-1.13-2.53-2.53-2.53zM10.12 55.66c-1.4 0-2.53 1.13-2.53 2.53s1.13 2.53 2.53 2.53 2.53-1.13 2.53-2.53-1.13-2.53-2.53-2.53z"
          className="moreinfo"
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
