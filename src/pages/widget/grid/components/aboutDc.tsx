import { message, Spin, Tooltip } from "antd"
import { useRef, useState } from "react"
import GenerateTemplate from './templates'

import CommingSoonTemplate from "./templates/CommingSoon"
import ReactSvg from "../../../../components/shared/ReactSvg"
import { ServerWithHomeDesq } from "../../../../types"


export const AboutDc = ({dc, placeholder, active, handleNavigate, i, domain}: {dc:ServerWithHomeDesq, placeholder?:boolean,active?:boolean, handleNavigate?:(id:string) => void, i?:number, domain:string}) => {
    
    return (
        <div className="flex space-x-3">

            <div className={`${active && 'bg-skin-fill-inverted text-skin-inverted'} h-max rounded relative show-icon w-max} rounded-[3px] overflow-hidden`}>
          
            <div>
                <div className={`relative w-full `}>
                
                    <div className={`relative border borde-skin-muted !h-[100px] !w-[140px] rounded overflow-hidden`}>
                        <img src={dc.image ? (!dc.image.includes('unsplash') ? [dc.image.split('?')[0], '_800x571','?',dc.image.split('?')[1] ].join('') : dc.image) : ''} className='w-full h-full object-cover' alt="" />
                    </div>
            
                </div>
            </div>
        </div>
        <div className='w-[200px] pr-1.5 leading-[19px]'>
         
                <p className='font-bold'>{dc.title}</p>
                <p className={`text-muted ellipsis-6`}>{dc.description ? dc.description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore nostrum quidem vero magni dolorum id! Aspernatur ab qui repellendus perspiciatis incidunt dolores quibusdam, quam sapiente temporibus molestiae. Omnis, quisquam sint.'}</p>
            
            </div>
        </div>
    )
}