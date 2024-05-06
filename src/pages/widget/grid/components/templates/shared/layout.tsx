import React from 'react'
import { HomeDesqProps } from '..'


export default function Layout({item, shadow, dim, children, col, layoutClass}: HomeDesqProps & {children:JSX.Element}) {
  return (
        <div className={`${layoutClass && layoutClass} overflow-hidden w-full h-full flex relative ${col && 'flex-col'}`} style={{background: item.bg, color: item.color}}>
            {children}
        </div>

  )
}
