import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 21C6.029 21 2 16.971 2 12C2 7.029 6.029 3 11 3C15.971 3 20 7.029 20 12"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.50999 9H19.49"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.50999 15H12"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 12C15 9.23599 14.277 6.47199 12.833 4.05999C11.986 2.64699 10.014 2.64699 9.16799 4.05999C6.27799 8.88499 6.27799 15.116 9.16799 19.941C9.59099 20.647 10.296 21.001 11.001 21.001"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.999 20V17C22 15.895 20.432 15 18.5 15C16.568 15 15.001 15.896 15 17V20C15 21.104 16.566 22 18.499 22C20.432 22 21.999 21.105 21.999 20Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 17C15 18.105 16.567 19 18.5 19C20.433 19 22 18.105 22 17"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
