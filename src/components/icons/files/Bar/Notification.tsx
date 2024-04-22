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
      d="M9.50903 18.0024V18.5147C9.50903 19.1751 9.77154 19.8085 10.2388 20.2754C10.706 20.7422 11.3396 21.0042 12.0001 21.0037V21.0037C12.6606 21.004 13.2943 20.7417 13.7614 20.2747C14.2286 19.8077 14.4911 19.1742 14.4911 18.5137V18.0024"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9496 18.0028C19.084 18.0028 20.0035 17.0833 20.0035 15.949V15.949C20.003 15.3728 19.7742 14.8202 19.3672 14.4123L18.0027 13.0488V8.99908C18.0027 5.68399 15.3152 2.99658 12.0002 2.99658V2.99658C8.68507 2.99658 5.99766 5.68399 5.99766 8.99908V13.0488L4.63309 14.4123C4.22608 14.8202 3.99729 15.3728 3.99683 15.949V15.949C3.99683 16.4937 4.21321 17.0161 4.59839 17.4013C4.98356 17.7864 5.50597 18.0028 6.05068 18.0028H17.9496Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
