import React from 'react'

export default function Description({text}: {text?:string}) {
  return (
    <p className='text-[8px] ellipsis-4' style={{lineHeight: '10px'}}>{text}</p>
  )
}
