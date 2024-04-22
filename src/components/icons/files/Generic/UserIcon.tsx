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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 21H5C3.895 21 3 20.105 3 19V5C3 3.895 3.895 3 5 3H19C20.105 3 21 3.895 21 5V19C21 20.105 20.105 21 19 21Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.4749 7.44713C15.8417 8.81397 15.8417 11.03 14.4749 12.3969C13.1081 13.7637 10.892 13.7637 9.52515 12.3969C8.15831 11.03 8.15831 8.81397 9.52515 7.44713C10.892 6.08029 13.1081 6.08029 14.4749 7.44713"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.413 18.031C17.236 17.585 16.961 17.185 16.609 16.859V16.859C16.014 16.307 15.236 16 14.424 16C13.07 16 10.93 16 9.576 16C8.764 16 7.986 16.307 7.39 16.859V16.859C7.038 17.185 6.764 17.585 6.586 18.031"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
