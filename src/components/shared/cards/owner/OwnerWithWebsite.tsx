import React, { useRef } from 'react'
import CardWithWebsiteLayout from '../WithWebsite/Layout'
import Description from '../WithWebsite/Description'

type PartnerType = {
  owner: any,
  imgHeight?:string,
  active?:boolean,
}
export default function OwnerWithWebsite({ owner, imgHeight,active } : PartnerType) {

 
  return (
    <div className=''>
      <CardWithWebsiteLayout
        item={{
          title: <p className={`${!active ? '!text-main-base' : 'text-white' }`}>{owner.name}</p>,
          website: <img src={owner.logo} className='w-full h-full' alt="" />
        }}
      
        imgClassName={`h-[190px] w-full ${imgHeight && imgHeight}`}
        border
        active={active}
      />
      <Description
          title={owner.name}
          description={owner.description}
          website={owner.website}
          type='Owner'
        />
    
    </div>
  )
}
