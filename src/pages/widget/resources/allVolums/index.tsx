import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router';
import { VolumeSearch } from '../../../../types';
import { useAppContext } from '../../../../context/appContext';
import useNavigateTo from '../../useNavigateTo';
import {  searchVolumes } from '../../../../utils/search';
import { renderHeightStyle } from '../../../../utils/utils';
import Collapse, { Panel } from '../../../../components/shared/Collapse';
import { useHandleLimits } from '../../../../hooks/useHandleLimits';
import ObjectWithDropdown from '../../../../components/shared/object/objectWithIcon/Withdrpdown';
import ResourceMenu from '../../../../components/shared/menu/ResourceMenu';
import ReactSvg from '../../../../components/shared/ReactSvg';
import { storageUrl } from '../../../../constants/apiRequests';

export default function AllVolumsLayout() {
    const params = useParams()
    const [volumes, setvolumes] = useState<{document:VolumeSearch}[]>([]);
    const { containerRef, query, setTotalHits, pagination, setPaginate, totalHits, volume } = useAppContext()
    const { goTo } = useNavigateTo()
    useHandleLimits({type: 'volume', windowHeight: containerRef?.current?.clientHeight, setPaginate,resourcesWidth:(containerRef?.current?.clientWidth - 30)})
    useEffect(() => {
       (async () =>  {
        let id
        if(params.serverId){
            id = params.serverId
        
        }
        if(params.volume){
            id = params.volume 
        }
        if(!id) return
        let filter = ''
        if(volume?.organizationId){
            filter = 'cfs_type:!=localServers'
        }else{
            filter='cfs_type:!=localServers && cfs_type:!=privateFolders'
        }
        const res:any = await searchVolumes({parentId:id, q:query,  page:pagination.currentPage, limit:pagination.limit, offset:pagination.offset, filter})
        setvolumes(res.hits)
        setTotalHits(res.found)

       })()
    }, [query, pagination.currentPage, pagination.limit, pagination.offset, volume]);
  return (
    <>

        <div className="pt-[14px] overflow-auto flex-1" style={renderHeightStyle(containerRef?.current?.clientHeight)}>
            <Collapse defaultActiveKey={['volumes']}>
                <>
                
        
                    <Panel key={'volumes'} header={<p className='text-groupe'>{totalHits} Volumes</p>}>
                        <div className="pl-[19px]">
                        <div className="flex flex-wrap gap-x-9">
                        {volumes && volumes.length>0 ? (
                            <>
                            {volumes.filter(v => v.document.id !== volume?.id).map(childVolume => (
                                    <ObjectWithDropdown
                                    title={childVolume.document.title.en}
                                    overlay={<ResourceMenu
                                        items={{shortcut:true}}
                               
                                    />}
                                    icon={<div className='relative w-full h-full '>
                                        <ReactSvg src={`${storageUrl}${childVolume.document.iconUrl}`} className='w-full h-full'
                 
                                        />
                                    
                                        
                                    </div>}
                                    key={childVolume.document.id}
                                    id={childVolume.document.id!}
                                    description={<p className='truncate'>{childVolume.document.breadcrumbs?.[0]?.en!}</p>
                                        
                                    
                                        
                                    }
                                    active={childVolume.document.id === params.volumeId}
                                    onSelect={() =>{
                                        if(volume?.organizationId && (childVolume.document.organizationId === volume?.organizationId)){
                                            goTo(`/volumes/${childVolume.document.id}/publications`, {state: childVolume.document})
                                        }else{
                                            goTo(`/all/volumes/${childVolume.document.id}`, {state: childVolume.document})

                                        }
                                    }}
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
            <Outlet/>
    </>
  )
}
