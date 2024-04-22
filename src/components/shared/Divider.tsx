import React from 'react'

export default function Divider({borderC} : {borderC?: string}) {
  return (
    <div className='h-full flex items-center'>
        <div className={`w-[1px] h-[15px] border-l ${borderC ? borderC : 'border-main'}`}></div>
    </div>
  )
}
