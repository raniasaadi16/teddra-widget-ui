import React from 'react'


export default function Input(props : React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
        {...props}
        type="text" 
        className={`disabled:opacity-[0.5] disabled:bg-skin-fill-muted  px-3  ${props.className}`} 
    />
  )
}
