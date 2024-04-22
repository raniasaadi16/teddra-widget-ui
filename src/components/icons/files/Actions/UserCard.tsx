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
      d="M10.091 8.15901C10.9697 9.03769 10.9697 10.4623 10.091 11.341C9.21231 12.2197 7.78769 12.2197 6.90901 11.341C6.03033 10.4623 6.03033 9.03769 6.90901 8.15901C7.78769 7.28033 9.21231 7.28033 10.091 8.15901"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 18.5V5.541C2 4.414 2.914 3.5 4.041 3.5H20C21.105 3.5 22 4.395 22 5.5V18.5C22 19.605 21.105 20.5 20 20.5H4C2.895 20.5 2 19.605 2 18.5Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9.5H19"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.4 13.5H15"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.095 16.5C11.92 16.061 11.65 15.667 11.303 15.346V15.346C10.716 14.802 9.946 14.5 9.146 14.5H7.854C7.054 14.5 6.284 14.802 5.697 15.346V15.346C5.35 15.667 5.08 16.061 4.905 16.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
