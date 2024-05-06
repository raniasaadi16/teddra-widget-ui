import React, { useRef } from 'react'

import CardWithWebsiteLayout from '../WithWebsite/Layout'
import Description from '../WithWebsite/Description'

type PartnerType = {
  partner: any,
  location?:any,
  imgHeight?:string,
  active?:boolean,
  small?:boolean, 
  country?:string
}
export default function PartnerWithWebsite({ partner, imgHeight,active, small, country } : PartnerType) {

 
  return (
    <div className=''>
      <CardWithWebsiteLayout
        item={{
          title: partner.title,
          // website:  <Website url={partner.website}/>
          website: <img src={partner.logo} className='w-full h-full' alt="" />
        }}
        small={small}
        imgClassName={`h-[190px] w-full ${imgHeight && imgHeight}`}
        border
        active={active}
        country={country}
      />
      {
        !small && (

        <Description
          title={partner.title}
          description={partner.description}
          website={partner.website}
          type='Partner'
          country={country}
        />
        )
      }
    
    </div>
  )
}
