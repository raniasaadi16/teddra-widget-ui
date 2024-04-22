import React from 'react'
import TitleBar from './TitleBar'
import PathBar from './Pathbar'
import { TopBarprops } from '../../../../types'

export default function TopBar(props: TopBarprops) {
  return (
    <div>
        {props.title && (
            <div className="">
                <TitleBar {...props.title}/>
            </div>
        )}
        {props.path && (
            <div className=" bg-sub-windows">
                <PathBar {...props.path}/>
            </div>
        )}
       
    </div>
  )
}
