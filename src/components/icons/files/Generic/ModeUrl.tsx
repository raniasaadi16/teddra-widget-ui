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
      d="M14.122 9.88024C15.293 11.0512 15.293 12.9522 14.122 14.1252C12.951 15.2962 11.05 15.2962 9.87703 14.1252C8.70603 12.9542 8.70603 11.0532 9.87703 9.88024C11.05 8.70724 12.95 8.70724 14.122 9.88024"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 12C3 11.341 3.152 10.689 3.446 10.088V10.088C4.961 6.991 8.309 5 12 5C15.691 5 19.039 6.991 20.554 10.088V10.088C20.848 10.689 21 11.341 21 12C21 12.659 20.848 13.311 20.554 13.912V13.912C19.039 17.009 15.691 19 12 19C8.309 19 4.961 17.009 3.446 13.912V13.912C3.152 13.311 3 12.659 3 12Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
