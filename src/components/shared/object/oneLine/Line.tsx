import React from 'react'
import { ObjectProps } from '../types'


export default function Line({children, onClick, active, className}: ObjectProps) {

    const handleClick = () => {
        if(onClick){
            onClick()
        }
    }
  return (
    <button className={`px-1.5 py-1 rounded flex w-full  ${className && className}`} onClick={handleClick}>
        {children}
    </button>
  )
}
