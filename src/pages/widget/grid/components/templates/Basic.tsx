import React from 'react'
import Title from './shared/title'
import Description from './shared/description'
import Layout from './shared/layout'
import { HomeDesqProps, templates } from '.'


export default function Basic({item,shadow, dim, icon, layoutClass}: HomeDesqProps) {
  return (
    <Layout
        item={item}
        shadow={shadow}
        dim={dim}
        layoutClass={layoutClass}
        
    >
        <>
            <div className='max-w-[90px] flex-1 flex flex-col justify-center px-[10px] relative z-10'>
                <Title title={item.title} domainColor={item.color2} domain={item.domain} />
                <Description text={item.description} />
            </div>
            <div className="w-[60%] h-full absolute right-0" style={{clipPath:templates.temp3}}>
                {!item.image ? (
                    <div className="bg-skin-fill-muted w-full h-full flex justify-center items-center">
                     
                    </div>
                ) : (
                    <img className='w-full h-full object-cover ' src={item.image}/>

                )}
            </div>
        
        </>
    </Layout>
  )
}
