import React from 'react'
import Basic from './Basic'
import Template2 from './Template2'
import Template3 from './CircleR'
import Template4 from './PointL'
import Template5 from './PointR'
import Template6 from './CircleL'
import PicUp from './PicUp'
import PicDown from './PicDown'
import CircleUp from './CircleUp'
import PicCircleL from './PicCircleL'
import PicCircleR from './PicCircleR'
import WithBg from './WithBg'
import SquareL from './SquareL'
import SquareR from './SquareR'

export const templates = {
  circleR: 'circle(77.5% at 85% 51%)',
  circleL: 'circle(77.5% at 15% 52%)',
  temp3: 'polygon(29% 0, 100% 0%, 100% 100%, 0% 100%)',
  temp4: 'polygon(0 0, 65% 0, 100% 100%, 0% 100%)',
  PointL: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
  pointR: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)',
  circleUp: 'circle(52.7% at 52% 0)',
  picCircleL: 'circle()',

}
export type HomeDesqProps = {
    item: {
        title:string,
        description?:string,
        bg:string,
        color?:string,
        color2:string,
        image?:string,
        templatedId?:number,
        opacity?:number,
        status:string,
        domain:string
    },
    shadow?: boolean,
    dim?:string,
    icon?: {type: 'icon' | 'image', src: string},
    layoutClass?:string,
    col?:boolean
}

export default function GenerateTemplate(props:HomeDesqProps) {
  if(props?.item?.templatedId === 0) return <WithBg {...props} />
  if(props?.item?.templatedId === 1) return <Basic {...props} />
  if(props?.item?.templatedId === 2) return <Template2 {...props} />
  if(props?.item?.templatedId === 3) return <Template3 {...props} />
  if(props?.item?.templatedId === 4) return <Template4 {...props} />
  if(props?.item?.templatedId === 5) return <Template5 {...props} />
  if(props?.item?.templatedId === 6) return <Template6 {...props} />
  if(props?.item?.templatedId === 7) return <PicUp {...props} />
  if(props?.item?.templatedId === 8) return <PicDown {...props} />
  if(props?.item?.templatedId === 9) return <PicCircleR {...props} />
  if(props?.item?.templatedId === 12) return <SquareL {...props} />
  if(props?.item?.templatedId === 13) return <SquareR {...props} />


  if(props?.item?.templatedId === 11) return <PicCircleL {...props} />
  return(
    <Basic item={
        {
            title:props.item?.title,
            description:'',
            bg:'#FFFFFF',
            color:'#000000',
            color2:'#000000',
            status:props.item.status,
            image:props.item.image,
            domain:props.item.domain
        }
        
      }
      dim={props.dim}
    
 
    />
  )


}
