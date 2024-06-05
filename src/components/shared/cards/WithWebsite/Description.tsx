import React from 'react'
import Icon from '../../../icons/Icon'

type Props = {
    type:string, title:string, description:string, links:JSX.Element, country?:string
}
export default function Description({type, title, description, links, country}:Props) {
  return (
    <div className='w-[200px] pr-1.5 leading-[19px]'>
      <div className='flex space-x-2 items-center'>
          <p className={`text-muted}`}>{type} {country}</p>

      </div>
          <p className='font-bold'>{title}</p>
          <p className={`text-muted ellipsis-6`}>{description}</p>
          <div className='flex space-x-1.5 mt-4'>
          
            {links}
          </div>
        </div>
  )
}
