import React, { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import {  iconType, routeType } from '../types'

type appBreadcrumbType = {
    datacenter: {id:string, name:string, icon:iconType} | null, 
    server: {id:string, name:string, overlay:JSX.Element} | null,
    volume: {id:string, name:string} | null,
    folder: {id:string, name:string} | null,


}

const appBreadcrumb = (props:appBreadcrumbType) => {
    const routes:routeType[] = [
        {
            icon:{type:'icon', src:'TeddraLogo'}
        },
       ...props?.datacenter? [{
        name:props?.datacenter.name,
        icon: props?.datacenter.icon
       }] : [],
       ...props?.server? [{
        name:props?.server.name,
        dropdown: {
          overlay: props.server.overlay
        }
       
       }] : [],
       ...props?.volume? [{
        name:props?.volume.name,
       }] : [],
       ...props?.folder? [{
        name:props?.folder.name,
       }] : [],
    //    ...(props?.module && props.datacenter && props.server && props.moduleBreadcrumb.routes.length>0)? [...generatePath(props.moduleBreadcrumb.routes, props.datacenter.id, props.server.id, props.module.key)] : []
    ]
    return routes
}
export default function useSetBreadcrumb(props:appBreadcrumbType) {
    const { setBreadcrumb, currentTab } = useAppContext()

    useEffect(() => {
      setBreadcrumb(appBreadcrumb({datacenter: currentTab === 'grid' ? null : props.datacenter, server: currentTab === 'main' ? props.server : null, volume: currentTab==='grid' ? null : props.volume , folder: props.folder ? props.folder : null}))
    }, [props.datacenter?.id, props.server?.id, currentTab, props.volume?.id, props.folder?.id])
  return {

  }
}
 