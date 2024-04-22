import React from 'react'
import { ObjectProps, ObjectWithDropdownProps } from '../types'
import Line from './Line'
import LineWithDropdown from './LineWithDropdown'


export default function OneLine(props: ObjectProps & ObjectWithDropdownProps) {
  return (
    <>
        
            <LineWithDropdown {...props}/>
     
    
    </>
  )
}
