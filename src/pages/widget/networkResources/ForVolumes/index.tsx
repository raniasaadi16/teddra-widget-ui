import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router';
import { VolumeSearch } from '../../../../types';
import {  searchVolumes } from '../../../../utils/search';
import Collapse, { Panel } from '../../../../components/shared/Collapse';
import ObjectWithDropdown from '../../../../components/shared/object/objectWithIcon/Withdrpdown';
import ResourceMenu from '../../../../components/shared/menu/ResourceMenu';
import ReactSvg from '../../../../components/shared/ReactSvg';
import { storageUrl } from '../../../../constants/apiRequests';
import { useAppContext } from '../../../../context/appContext';
import { renderHeightStyle } from '../../../../utils/utils';
import useNavigateTo from '../../useNavigateTo';
import { useHandleLimits } from '../../../../hooks/useHandleLimits';

export default function NetworkResourcesForVolumes() {
    const params = useParams()
    const [volumes, setvolumes] = useState<{document:VolumeSearch}[]>([])
    const { query , containerRef, setTotalHits, setPaginate, pagination, volume} = useAppContext()
    const { goTo } = useNavigateTo()

    useHandleLimits({type: 'volume', windowHeight: containerRef?.current?.clientHeight, setPaginate,resourcesWidth:((containerRef?.current?.clientWidth)*0.67 -43)})

    useEffect(() => {
       (async () =>  {
        let id
        if(params.datacenterId){
            id = params.datacenterId
        
        }
        if(!volume) return
        if(!id) return
        const res:any = await searchVolumes({parentId:id, q:query, filter: `cfs_type:=specDrives && title.en:${volume.title}`, page:pagination.currentPage, limit:pagination.limit, offset:pagination.offset})
        setvolumes(res.hits)
        setTotalHits(res.found)

       })()
    }, [query, pagination.currentPage, pagination.limit, pagination.offset, volume?.id]);


  return (
    <>

        <div className="pt-[14px] overflow-auto flex-1" style={renderHeightStyle(containerRef?.current?.clientHeight)}>
        <Collapse defaultActiveKey={['publications', 'volumes']}>
            <>
            
                <Panel key={'volumes'} header={<p className='text-groupe'>Volumes</p>}>
                    <div className='pl-[14px] '>
                        <div className="flex flex-wrap gap-x-9">
                            {volumes && volumes.length>0 ? (
                                <>
                                {volumes.map(volume => (
                                        <ObjectWithDropdown
                                        title={`${volume.document.title.en} - ${volume.document.breadcrumbs[0]?.en?.split('/')?.[1]}`}
                                        overlay={<ResourceMenu
                                            items={{shortcut:true}}
                                
                                        />}
                                        icon={<div className='relative w-full h-full '>
                                            <ReactSvg src={`${storageUrl}${volume.document.iconUrl}`} className='w-full h-full'
                    
                                            />
                                        
                                            
                                        </div>}
                                        key={volume.document.id}
                                        id={volume.document.id!}
                                        description={<p className='truncate'>{volume.document.breadcrumbs?.[0]?.en!}</p>
                                            
                                        
                                            
                                        }
                                        active={volume.document.id === params.volumeId}
                                        onSelect={() => goTo(`/volumes/${volume.document.id}`, {state: volume.document})}
                                    />
                                    ))}
                            
                                </>
                            ) : <p className='pl-2.5'>No volumes yet</p>}
                        </div>
                    
                    
                    </div>
                </Panel>
            
            
            </>
        </Collapse>

        </div>
        <div className='w-[33%]'>
            <Outlet/>
        </div>
    </>
  )
}
