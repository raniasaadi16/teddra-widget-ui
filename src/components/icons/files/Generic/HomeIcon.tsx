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
      d="M9.5 20.4998V15.9998C9.5 14.6188 10.619 13.4998 12 13.4998V13.4998C13.381 13.4998 14.5 14.6188 14.5 15.9998V20.4998H20V11.9138C20 11.3838 19.789 10.8748 19.414 10.4998L12.707 3.79276C12.316 3.40176 11.683 3.40176 11.293 3.79276L4.586 10.4998C4.211 10.8748 4 11.3838 4 11.9138V20.4998H9.5Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
