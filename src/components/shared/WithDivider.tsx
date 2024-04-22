import React from 'react'
import Divider from './Divider'

type Props = {
    children: React.ReactElement,
    textClassName? : string, 
    className? : string
}
export default function WithDivider({children, textClassName, className} : Props) {
  return (
    <div className={`py-1.5 flex space-x-2.5 items-center h-full ${className && className}`}>
      <Divider borderC='border-main'/>
        <p className='text-column'>{children}</p>

    </div>
  )
}
