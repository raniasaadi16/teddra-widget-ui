import React from 'react'


type Props = {
    children: React.ReactElement,
}
export default function WindowLayout({ children}: Props) {
 return (
    <div className={`w-full h-full text-skin-base flex flex-col  teddra-rounded teddra-shadow pt-0 `} >
       
        <div className={`flex-1 flex flex-col rounded-[8px] overflow-hidden `}>
            {children}
        </div>
        

    </div>
  )
}
