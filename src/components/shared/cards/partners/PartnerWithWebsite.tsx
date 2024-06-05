import React, { useRef } from 'react'

import CardWithWebsiteLayout from '../WithWebsite/Layout'
import Description from '../WithWebsite/Description'
import Icon from '../../../icons/Icon'

type PartnerType = {
  partner: any,
  location?:any,
  imgHeight?:string,
  active?:boolean,
  small?:boolean, 
  country?:string,
  volume:{id:string,title:string, icon:string, breadcrumb:string, private:boolean, coll:string},
  vertical?:boolean
}
export default function PartnerWithWebsite({ partner, imgHeight,active, small, country, volume, vertical } : PartnerType) {
  const handleNavigation = () => {
    window.open(`/widget/partner/${volume.coll}/${volume.id}/?url=${partner.website}`,'_blank')
  }
  return (
    <div className={vertical ? 'flex space-x-3' : ''}>
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
          <div className={!vertical ? `py-3 pt-5` : ''}>
            <Description
              title={partner.title}
              description={partner.description}
              links={<button onClick={handleNavigation}><Icon name='OpenWindow' className='icon-sm'/></button>}
              type=''
              country={country}
            />

          </div>
        )
      }
    
    </div>
  )
}
