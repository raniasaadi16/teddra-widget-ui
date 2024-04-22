import React from 'react'
import { Collapse as AntdCollapse, CollapseProps } from 'antd'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
export const { Panel } = AntdCollapse

type Props = {
  children: React.ReactElement,
  
}
export default function Collapse({children, ...props} : Props & CollapseProps ) {
  return (
    <AntdCollapse
        bordered={false}
        
        expandIcon={({ isActive  }) =>
            isActive  ? (
            <ChevronDownIcon className="w-3.5 h-3.5" />
            ) : (
            <ChevronRightIcon className="w-3.5 h-3.5" />
            )
        }
        {...props}
    >
        {children}
    
    </AntdCollapse>
  )
}

