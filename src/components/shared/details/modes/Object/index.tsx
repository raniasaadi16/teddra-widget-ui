import Slide from './Slide'
import { iconType } from '../../../../../types'
import ReactSvg from '../../../ReactSvg'

type Props = {
    fields: {
        name: string | JSX.Element,
        value: string | JSX.Element,
        center?:boolean,
        keywords?:boolean
    }[],
    thumb?: {
        type: 'icon',
        icon: iconType
    } | {
        type:'slide',
        images:{src: string, type:string, dim?:string}[] 
    }
}
export default function ObjectMode({ fields, thumb }:Props) {
    
  return (
    <div className="w-full flex justify-center">
        <div className='pr-5 max-w-[400px]'>
        
        
            <div className="space-y-4 pt-5 pb-4">
                {thumb && (
                    thumb.type === 'slide' ? (
                        <div className='w-full pl-3'>
                            <Slide media={thumb.images} />
                        </div>
                    ): (
                        <div className="flex space-x-4">
                            <div className="w-[85px] text-title !font-bold text-end"></div>
                            <div className="flex-1">
                                <div className="w-[135px]  flex items-end ">
                                    <div className="relative w-[100px] h-[100px]">
                                        <ReactSvg src={thumb.icon.src} className='w-full h-full' />
                                    </div>   
                                </div>
        
                            </div>
                        </div>
                    )

                )}
            
                {fields.map(field => (
                    <div className={`relative flex space-x-4 ${field.center && 'items-center'}`}>
                        <p className={`w-[85px] text-title !font-bold text-end ${!field.center && ''}`}>{field.name}</p>
                        <div className="flex-1" style={{lineHeight:'1.6'}}>
                            {field.value}
                        </div>
                    </div>

                ))}
        
            </div>
        
        </div>

    </div>
  )
}
