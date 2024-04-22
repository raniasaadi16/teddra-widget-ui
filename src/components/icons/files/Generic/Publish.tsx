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
      d="M13 21H17.5C18.8807 21 20 19.8807 20 18.5V8.37167C20 7.57602 19.6839 6.81296 19.1213 6.25035L16.7497 3.87868C16.187 3.31607 15.424 3 14.6283 3H7.5C6.11929 3 5 4.11929 5 5.5V13"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.9764 8H16.5C15.6716 8 15 7.32843 15 6.5V3.02362"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.29291 17.9762L8.82981 14.4393C9.11111 14.158 9.49265 14 9.89047 14C10.2883 14 10.6698 14.158 10.9511 14.4393L11.5607 15.0489C12.1464 15.6347 12.1464 16.5844 11.5607 17.1702L8.02373 20.7071C7.83619 20.8946 7.58183 21 7.31661 21H5.5C5.22386 21 5 20.7761 5 20.5V18.6833C5 18.4181 5.10536 18.1638 5.29291 17.9762Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
