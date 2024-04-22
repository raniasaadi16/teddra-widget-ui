import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.99 21.99" {...props}>
    <defs>
      <style>
        {
          ".lists-2{fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:1.7px}"
        }
      </style>
    </defs>
    <g id="Calque_2" data-name="Calque 2">
      <g id="Calque_1-2" data-name="Calque 1">
        <path
          d="M9 2.51v2.24c0 .4.21.72.47.72h11c.26 0 .47-.32.47-.72V2.51c0-.4-.21-.72-.47-.72h-11c-.3 0-.47.32-.47.72ZM9 9.89v2.25c0 .4.21.72.47.72h11c.26 0 .47-.32.47-.72V9.89c0-.39-.21-.71-.47-.71h-11c-.3 0-.47.32-.47.71ZM9 17.24v2.24c0 .4.21.72.47.72h11c.26 0 .47-.32.47-.72v-2.24c0-.4-.21-.72-.47-.72h-11c-.3 0-.47.32-.47.72ZM1.19 2.51v2.24c0 .4.07.72.15.72h3.41c.08 0 .15-.32.15-.72V2.51c0-.4-.07-.72-.15-.72H1.34c-.08 0-.15.32-.15.72ZM1.19 9.89v2.25c0 .4.07.72.15.72h3.41c.08 0 .15-.32.15-.72V9.89c0-.39-.07-.71-.15-.71H1.34c-.08 0-.15.32-.15.71ZM1.19 17.24v2.24c0 .4.07.72.15.72h3.41c.08 0 .15-.32.15-.72v-2.24c0-.4-.07-.72-.15-.72H1.34c-.08 0-.15.32-.15.72Z"
          className="lists-2"
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
