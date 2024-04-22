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
      d="M12 13.1199V9.37988"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.999 16.125C11.861 16.125 11.749 16.237 11.75 16.375C11.75 16.513 11.862 16.625 12 16.625C12.138 16.625 12.25 16.513 12.25 16.375C12.25 16.237 12.138 16.125 11.999 16.125"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.029 4.13919L21.688 17.5432C22.578 19.1012 21.453 21.0402 19.659 21.0402H4.341C2.546 21.0402 1.421 19.1012 2.312 17.5432L9.971 4.13919C10.868 2.56819 13.132 2.56819 14.029 4.13919Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
