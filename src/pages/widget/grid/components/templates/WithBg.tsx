import React from 'react'
import Title from './shared/title'
import Description from './shared/description'
import Layout from './shared/layout'
import { HomeDesqProps } from '.'



export default function WithBg({item,shadow,dim, layoutClass}: HomeDesqProps) {
    const renderRgba = () => {
        return `rgba(${parseInt(item.bg.slice(-6, -4), 16)} ,${parseInt(item.bg.slice(-4, -2), 16)} ,${parseInt(item.bg.slice(-2), 16)} , ${item.opacity ? item.opacity : 0.5} )`
    }
  return (
    <Layout
        item={item}
        shadow={shadow}
        dim={dim}
        col={true}
        layoutClass={layoutClass}
    >
        {/* rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')' */}
            <div className="flex-1 w-full h-full items-center text-center flex !bg-center !bg-cover" style={{background: `linear-gradient(0, ${renderRgba()}, ${renderRgba()}), url(${item.image})`}}>
                <div className='w-full h-full flex flex-col items-center justify-center px-4'>
                    <Title title={item.title}  domainColor={item.color2} domain={item.domain}/>
                    <Description text={item.description} />

                </div>
             
            </div>
           
        
    </Layout>
  )
}
