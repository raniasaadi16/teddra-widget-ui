import { useNavigate } from "react-router-dom"
import { ChevronRightIcon } from "@heroicons/react/solid"
import { ButtonLg } from "../Buttons/ButtonLg"
import { routeType } from "../../../types"

type Props = {
    routes : routeType[]
}

export const Breadcrumb = (props:Props) => {
    const navigate = useNavigate()
    return (
        <div className={`w-full input-h rounded border border-main flex justify-between bg-sub-windows `}>
            <div className="flex space-x-0.5 items-center flex-1  rounded  py-0.5">
                {props.routes.map((route,i) => (
                    <>
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
                            <p className={`${(i===props.routes.length -1) && 'font-bold'}`}>{route.name}</p>
                        </ButtonLg>
                    
                        <ChevronRightIcon className="w-3.5 h-3.5"/>
                    
                    </>

                ))}
                
            </div>
        </div>
    )
}