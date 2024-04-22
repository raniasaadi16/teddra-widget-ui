import { Dropdown } from 'antd'
import React, { useRef, useState } from 'react'
import Icon from '../../../icons/Icon'


type Props = {
    title: string | JSX.Element,
    icon:JSX.Element,
    description:string | JSX.Element,
    onSelect: any,
    id: string,
    overlay: JSX.Element,
    active?:boolean

}
export default function ObjectWithDropdown({title, icon,overlay, description, onSelect, active} :Props) {
    const [dropdownOpen, setdropdownOpen] = useState(false)
    return (
        <button className={`h-max relative group flex max-w-[280px] w-full ${(active || dropdownOpen) ? 'bg-skin-fill-inverted !text-skin-inverted fill-skin-inverted' : 'bg-hover-transparent'}  hover-lg`} 
                >
                    <Dropdown 
                    overlay={overlay}
                    trigger={['click']}
                    onVisibleChange={visible => setdropdownOpen(visible)}
                    >
                        <button className={`absolute right-[2px] top-[2px] rounded p-1 bg-fill-muted ${dropdownOpen ? 'bg-white text-bg-selected' : 'hidden'} group-hover:block z-[10] ${active && '!block'}`} >
                            <Icon className='icon-sm' name='Ellipsis' />
                        </button>
                    </Dropdown>
                        <div className='flex relative  ' 
                            onClick={onSelect} 
                            >
                            <div className='relative w-[40px] h-[40px] flex justify-end z-20 mt-[4px]'>
                            
                                {icon}
                            </div>
                            
                            <div className='ml-3 flex-1 text-start'>
                                <p className=" truncate max-w-[190px]">{title}</p>
                                <p className={`  max-w-[190px]  ${(dropdownOpen || active) ? 'text-skin-inverted' : 'text-muted'} text-small`}>{description}</p>
                            </div>

                        </div>
                </button>
  )
}
