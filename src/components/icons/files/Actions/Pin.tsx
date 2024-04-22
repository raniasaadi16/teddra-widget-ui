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
      d="M15.4123 4.02025L19.4796 8.08763C19.8584 8.46639 20.0474 8.99501 19.9946 9.52805C19.9418 10.0611 19.6528 10.5424 19.2071 10.8395L16.2332 12.8222C15.8631 13.0689 15.5983 13.4447 15.4904 13.8761L14.2531 18.8254C14.175 19.1379 13.9348 19.3842 13.6244 19.4701C13.3141 19.5561 12.9814 19.4685 12.7537 19.2407L4.25916 10.7462C4.03143 10.5185 3.9438 10.1858 4.02977 9.87546C4.11575 9.56508 4.36203 9.32494 4.67447 9.24683L9.62376 8.0095C10.0552 7.90162 10.431 7.63679 10.6777 7.26673L12.6604 4.29275C12.9575 3.84707 13.4388 3.55808 13.9718 3.50529C14.5049 3.45251 15.0335 3.6415 15.4123 4.02025Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.9967 19.5034L8.50641 14.9937"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
