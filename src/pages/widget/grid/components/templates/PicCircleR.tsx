import React from 'react'
import Title from './shared/title'
import Description from './shared/description'
import Layout from './shared/layout'
import { HomeDesqProps, templates } from '.'



export default function PicCircleR({item,shadow,dim,layoutClass }: HomeDesqProps) {
  return (
    <Layout
        item={item}
        shadow={shadow}
        dim={dim}
        layoutClass={layoutClass}
    >
        <>
         <div className='flex-1 flex flex-col justify-center relative z-10 pl-[28px]'>
                <Title title={item.title} domainColor={item.color2} domain={item.domain} />
                <Description text={item.description} />
            </div>
            <div className="w-[50%] h-[75%] m-auto ml-[5px] rounded-full" style={{clipPath: templates.picCircleL}}>
                {!item.image ? (
                    <div className="bg-skin-fill-muted w-full h-full"></div>
                ) : (
                    <img className='w-full h-full object-cover rounded-y' src={item.image}/>

                )}
            </div>
      
        
        </>
    </Layout>
  )
}
