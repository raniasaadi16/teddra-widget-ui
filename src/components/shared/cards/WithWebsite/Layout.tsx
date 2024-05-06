import React, { ReactNode } from 'react'

type itemType = {
    website: ReactNode,
    title: ReactNode, 
}
type cardType = {
    item: itemType,
    cardClassName? : string,
    imgClassName? : string,
    border? : boolean,
    active?:boolean,
    small?:boolean,
    country?:string
}
export default function CardWithWebsiteLayout({
    item: {website, title},
    cardClassName,
    imgClassName,
    border,
    active,
    small,
    country
} : cardType) {
  return (
    <div className={`${active && 'bg-skin-fill-inverted text-skin-inverted'} h-max rounded relative show-icon w-max ${cardClassName} rounded-[3px] overflow-hidden`}>
      
        <div>
            <div className={`relative w-full `}>
               
                <div className={`relative ${imgClassName} border borde-skin-muted !h-[120px] !w-[120px] rounded overflow-hidden`}>
                    {website}
                </div>
               {small && (
                <>
                    <p className='max-w-[140px]  text-center mt-2'>{title}</p>
                    {country && <p className={`${active ? 'text-small': 'text-muted'} text-center`}>({country})</p>}
                
                </>
               )}
            </div>
        </div>
    </div>
  )
}

CardWithWebsiteLayout.defaultProps = {
    cardClassName: '',
    imgClassName:'w-[40px] h-[40px]',
    descriptionClassName: ''
}