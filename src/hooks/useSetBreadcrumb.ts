import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import {  routeType } from '../types'
import { useLocation } from 'react-router'
type appBreadcrumbType = {
    datacenter: {id:string, name:string} | null, 
    server: {id:string, name:string} | null,
    volume: {id:string, name:string} | null,

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
       ...props?.volume? [{
        name:props?.volume.name,
       }] : [],
    
    //    ...(props?.module && props.datacenter && props.server && props.moduleBreadcrumb.routes.length>0)? [...generatePath(props.moduleBreadcrumb.routes, props.datacenter.id, props.server.id, props.module.key)] : []
    ]
    return routes
}
export default function useSetBreadcrumb(props:appBreadcrumbType) {
    const { setBreadcrumb, currentTab } = useAppContext()

    useEffect(() => {
      setBreadcrumb(appBreadcrumb({datacenter: currentTab === 'grid' ? null : props.datacenter, server: currentTab === 'main' ? props.server : null, volume: currentTab==='grid' ? null : props.volume }))
    }, [props.datacenter?.id, props.server?.id, currentTab, props.volume?.id])
  return {

  }
}
 