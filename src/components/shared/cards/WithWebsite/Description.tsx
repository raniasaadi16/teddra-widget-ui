import React from 'react'
import Icon from '../../../icons/Icon'

type Props = {
    type:string, title:string, description:string, website:string, country?:string
}
export default function Description({type, title, description, website, country}:Props) {
  return (
    <div className='w-[200px] py-3 pr-1.5 leading-[19px]'>
      <div className='flex space-x-2 items-center'>
          <p className={`text-muted}`}>{type} {country}</p>

      </div>
          <p className='font-bold'>{title}</p>
          <p className={`text-muted ellipsis-6`}>{description}</p>
          <div className='flex space-x-1.5 mt-2'>
          
            <a href={website} className='!text-inherit' target='_blank'><Icon name='OpenWindow' className='icon-sm'/></a>
          </div>
        </div>
  )
}
