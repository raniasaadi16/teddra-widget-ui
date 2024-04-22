import { Menu } from 'antd'
import React from 'react'
import { TypeMenuItem } from '../../../types'

type Props = {
  items : any,
  selectedKeys:string[]
}
export default function DropDownMenu(props:Props){
  return (
    <div className="relative min-w-[270px]  teddra-whadow " >
        <Menu selectedKeys={props.selectedKeys} triggerSubMenuAction='click' mode="vertical" items={props.items} rootClassName="p-2 rounded menu-filter"   />
      
    </div>
  )
}
    
