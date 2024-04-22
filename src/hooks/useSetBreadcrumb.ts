import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import { Breadcrumb, routeType } from '../types'
type appBreadcrumbType = {
    datacenter: {id:string, name:string} | null, 
    server: {id:string, name:string} | null,
}
const generatePath = (routes:routeType[], datacenter:string, server:string,module:string)=> {
    return routes.map(route => (
        {
            ...route,
        }          
    ))
}
const appBreadcrumb = (props:appBreadcrumbType) => {
    const routes:routeType[] = [
        {
            icon:{type:'icon', src:'Globe'}
        },
       ...props?.datacenter? [{
        name:props?.datacenter.name,
       }] : [],
       ...props?.server? [{
        name:props?.server.name,
       }] : [],
    
    //    ...(props?.module && props.datacenter && props.server && props.moduleBreadcrumb.routes.length>0)? [...generatePath(props.moduleBreadcrumb.routes, props.datacenter.id, props.server.id, props.module.key)] : []
    ]
    return routes
}
export default function useSetBreadcrumb(props:appBreadcrumbType) {
    const { setBreadcrumb } = useAppContext()
    useEffect(() => {
      setBreadcrumb(appBreadcrumb(props))
    }, [props.datacenter?.id, props.server?.id])
  return {

  }
}
 