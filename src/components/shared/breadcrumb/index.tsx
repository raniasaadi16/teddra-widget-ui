import { useNavigate } from "react-router-dom"
import { ChevronRightIcon } from "@heroicons/react/solid"
import { ButtonLg } from "../Buttons/ButtonLg"
import { routeType } from "../../../types"
import { Dropdown } from "antd"
import { useState } from "react"

type Props = {
    routes : routeType[]
}

export const Breadcrumb = (props:Props) => {
    const [visible, setvisible] = useState<null | number>(null);
    return (
        <div className={`w-full input-h rounded  flex justify-between bg-sub-windows `}>
            <div className="flex space-x-0.5 items-center rounded  py-0.5">
                {props.routes.map((route,i) => (
                    <>
                    {(route.dropdown && i!==props.routes.length -1 )? (
                        <Dropdown
                            trigger={['click']}
                            overlay={<div className=" px-5 pb-5 bg-white teddra-shadow rounded">
                                {route.dropdown.overlay}
                            </div>}
                            onVisibleChange={vs => vs ? setvisible(i) : setvisible(null)}
                        >
                            <button>

                                <ButtonLg
                                    key={i}
                                    buttonProps={{
                                        onClick:() => route.action ? route.action() : {},
                                    }}
                                    prefix={route.icon && {
                                        icon: route.icon,
                                        size:'sm'
                                    }}
                                    active={visible === i}
                                    
                                >
                                    <p className={`${(i===props.routes.length -1) && 'font-bold'} text-start ellipsis-1 `}>{route.name}</p>
                                </ButtonLg>
                            </button>

                        </Dropdown>

                    ) : (
                        
                        <ButtonLg
                            key={i}
                            buttonProps={{
                                onClick:() => route.action ? route.action() : {},
                            }}
                            prefix={route.icon && {
                                icon: route.icon,
                                size:'sm'
                            }}
                            
                        >
                            <p className={`${(i===props.routes.length -1) && 'font-bold'} text-start ellipsis-1 `}>{route.name}</p>
                        </ButtonLg>
                    )}
                    {(i!==props.routes.length -1) && (

                        <ChevronRightIcon className="w-3.5 h-3.5"/>
                    )}
                    
                    </>

                ))}

                
            </div>
        </div>
    )
}