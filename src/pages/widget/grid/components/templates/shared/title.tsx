import React from 'react'

export default function Title({title, domainColor, domain} : {title?:string,domainColor:string, domain:string}) {
  return (
    <>
      <p className='text-[7px] uppercase' style={{lineHeight: '9px', color:domainColor}} >{domain}</p>

      <p className='text-[9px] font-bold uppercase' style={{lineHeight: '12px'}}>{title}</p>
    </>
  )
}
