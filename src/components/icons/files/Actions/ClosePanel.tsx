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
    viewBox="0 0 239.63 239.63"
    {...props}
  >
    <defs>
      <style>{".closepanel{fill-rule:nonzero}"}</style>
    </defs>
    <g id="Plan_x0020_1">
      <path
        id="_1805258561312"
        d="M239.63 239.63H0V0h239.63z"
        style={{
          fill: "none",
          fillRule: "nonzero",
        }}
      />
      <g id="_1805258560400">
        <path
          d="M199.69 19.97h-49.92v19.97h49.92v159.75h-49.92v19.97h49.92c11.01 0 19.97-8.96 19.97-19.97V39.94c0-11.01-8.96-19.97-19.97-19.97zM89.86 19.97H69.89v19.97h19.97zM69.89 219.66h19.97v-19.97H69.89zM19.97 39.94v9.98h19.97v-9.98h9.98V19.97h-9.98c-11.02 0-19.97 8.96-19.97 19.97zM39.94 189.7H19.97v9.99c0 11.01 8.95 19.97 19.97 19.97h9.98v-19.97h-9.98v-9.99zM39.94 69.89H19.97v19.97h19.97zM39.94 149.77H19.97v19.97h19.97zM39.94 109.83H19.97v19.97h19.97z"
          className="closepanel"
        />
        <path
          d="M169.74 139.78c0-22.02-17.92-39.94-39.94-39.94H94l12.9-12.9-14.11-14.12-37.02 37.01 37.02 37.01 14.11-14.12-12.9-12.9h35.8c11.01 0 19.97 8.95 19.97 19.96h19.97zM129.8 19.97h-19.97v49.92h19.97zM109.83 219.66h19.97v-69.89h-19.97z"
          className="closepanel"
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
