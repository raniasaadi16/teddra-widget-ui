import React from 'react'
import PartnerCardLayout from '../WithWebsite/Layout'
import Icon from '../../../icons/Icon'

type PartnerType = {
  imgHeight?:string,
}
export default function PartnerPlaceholder({ imgHeight } : PartnerType) {


  return (
    <>
      <PartnerCardLayout
        item={{
          title: <p className='text-title'>Become Partner</p>,
          website:<div className='flex items-center justify-center w-full h-full  bg-skin-fill-muted rounded-[4px]'>
            <Icon name='Journal' className='icon-md opacity-10' />
          </div>
        }}
      
        imgClassName={`h-[190px] w-full ${imgHeight && imgHeight}`}
        border
      />
      
    </>
  )
}
