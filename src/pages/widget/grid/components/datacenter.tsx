import { message, Spin, Tooltip } from "antd"
import { useRef, useState } from "react"
import GenerateTemplate from './templates'

import CommingSoonTemplate from "./templates/CommingSoon"
import ReactSvg from "../../../../components/shared/ReactSvg"
import { ServerWithHomeDesq } from "../../../../types"


export const Datacenter = ({dc, placeholder, active, handleNavigate, i, domain, select}: {dc:ServerWithHomeDesq, placeholder?:boolean,active?:boolean, handleNavigate?:(id:string) => void, i?:number, domain:string, select?:() => void}) => {
    
    return (
        <div className={`${!placeholder && 'shadow-desq'} border border-main w-[250px] hover:-translate-y-1 h-max rounded-[10px] transition-transform transition-shadow  relative group  bg-white cursor-pointer`}
        onClick={() => handleNavigate ? handleNavigate(dc.id) : {}}
      
        >
                {placeholder && (
                    <div className="absolute top-[5px] right-[-5px] w-full h-full shadow-desq border border-main rounded-[10px]"></div>
                )}
                <div className="w-full h-[140px] overflow-hidden relative z-[10] rounded-t-[10px]" >
                    {i && <div className="bg-black w-[22px] h-[22px] flex items-center justify-center absolute top-[5px] right-[5px] rounded-full">
                        <p className="text-small text-white">{i}</p>    
                    </div>}
                    <div className="w-[250px] h-[140px] relative rounded-[10px] bg-white">   
                    {dc.status !== 'enabled' ? (
                            <CommingSoonTemplate dc={dc} domain={domain} placeholder/>
                    ) : (
                        <GenerateTemplate
                            item={{
                                title:dc.title?.en ? dc.title.en :dc.title,
                                description: dc.description ? dc.description.en : '',
                                bg:dc.bg,
                                color:dc.color,
                                color2:dc.color2,
                                image:dc.image ? (!dc.image.includes('unsplash') ? [dc.image.split('?')[0], '_800x571','?',dc.image.split('?')[1] ].join('') : dc.image) : '/datacenter.jpg',
                                templatedId:dc.temp,
                                opacity:0.7,
                                status:dc.status,
                                domain:domain,
                            }}
                            dim='w-full h-full'
                        
                        />

                    )}
                    </div>
                   
                </div>
                <div className="space-y-1.5 pt-[11px] pb-[10px] px-[15px] relative z-[10] bg-white rounded-b-[10px]">
                    <div className="flex space-x-2">
                        <ReactSvg src={`${dc.iconUrl}`} className="icon-sm mt-0.5"/>
                        <div className="space-y-0.5 flex-1">
                        
                            <p className="text-title truncate">{dc.title?.en ? dc.title.en :dc.title}</p>
                            {dc.status !== 'enabled' ? (
                                <p className={`${active ? 'text-small text-skin-inverted' : 'text-muted'} ellipsis-1`}>coming soon</p>

                            ) : (
                                <p className={`${active ? 'text-small text-skin-inverted' : 'text-muted'} ellipsis-1`} style={{lineHeight:'17px'}}>{dc.description?.en ? dc.description.en : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}</p> 
                            )}

                        </div>
                    </div>
                    <div className="flex justify-end">
                         
                                <button className="px-3 py-1.5 rounded border border-main bg-hover-transparent disabled:opacity-20" disabled={dc.status !== 'enabled'} onClick={select}>Select</button>

                            
                        


                 
                    </div>
                </div>
                

        </div>
    )
}