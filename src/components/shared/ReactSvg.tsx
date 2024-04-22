import React from 'react'
import { ReactSVG as ReactSvgIcon } from 'react-svg'

export default function ReactSvg({src, className}: {src:string, className:string}) {
  return (
    <ReactSvgIcon
        src={src} 
        className={className}
        beforeInjection={(svg) => {
        svg.setAttribute('style', 'width: 100%; height:100%; fill:inherit ')
      }}
    />
  )
}
