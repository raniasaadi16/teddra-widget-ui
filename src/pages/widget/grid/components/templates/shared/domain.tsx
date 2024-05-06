import React from 'react'

export default function Domain({text}: {text:string}) {
  return (
    <p className='text-[8px]' style={{lineHeight: '9px'}}>{text}</p>
  )
}
