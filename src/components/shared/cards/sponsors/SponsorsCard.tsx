import React, { useRef } from 'react'

import CardWithWebsiteLayout from '../WithWebsite/Layout'
import Description from '../WithWebsite/Description'
import Icon from '../../../icons/Icon'

type PartnerType = {
  sponsor: any,
  location?:any,
  imgHeight?:string,
  active?:boolean,
  small?:boolean, 
  country?:string
}
export default function SponsorCard({ sponsor, imgHeight,active, small, country } : PartnerType) {

 
  return (
    <div className='flex space-x-3'>
      <CardWithWebsiteLayout
        item={{
          title: sponsor.title,
          website: <img src={sponsor.logo} className='w-full h-full' alt="" />
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
          title={sponsor.title}
          description={sponsor.description}
          links={<a href={sponsor.website} className='!text-inherit' target='_blank'><Icon name='OpenWindow' className='icon-sm'/></a>}
          type=''
          country={country}
        />
        )
      }
    
    </div>
  )
}
