import React from 'react'
import Line from './Line'
import { Dropdown } from 'antd'
import { ObjectWithDropdownProps } from '../types'
import Icon from '../../../icons/Icon'

export default function LineWithDropdown({children, onClick,active,dropdownProps, className, draggable, onDragStart, noHover}: ObjectWithDropdownProps) {
    const handleDrag =(e:React.DragEvent<HTMLDivElement>) => {
        onDragStart && onDragStart(e)
    }
  return (
    <div className={`flex space justify-between w-full items-center ${active ? 'bg-skin-fill-inverted text-skin-inverted fill-skin-inverted' : !noHover && 'bg-hover-transparent'} ${className && className} w-full rounded px-1.5 py-1`} draggable={draggable ? draggable : false} onDragStart={handleDrag}>
        <Line active={false} onClick={onClick} className={'!p-0 !border-none !bg-transparent'}>
            {children}
        </Line>
        <div className="w-[20px] h-full flex justify-center items-center">
            {active && (
                dropdownProps && (
                    <Dropdown 
                    trigger={['click']}
                    {...dropdownProps}
                    >
                        <button className='rounded '>
                            <Icon className='icon-sm' name='Ellipsis' />
                        </button>
                    </Dropdown>

                )
            )}
        </div>
    </div>
  )
}
