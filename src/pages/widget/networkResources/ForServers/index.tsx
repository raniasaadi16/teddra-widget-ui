import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router';
import { Server } from '../../../../types';
import Collapse, { Panel } from '../../../../components/shared/Collapse';
import ReactSvg from '../../../../components/shared/ReactSvg';
import { useAppContext } from '../../../../context/appContext';
import { renderHeightStyle } from '../../../../utils/utils';
import useNavigateTo from '../../useNavigateTo';
import { getDatacenterLocalServers } from '../../../../utils/requests';
import ServerComponent from '../ServerComponent';

export default function NetworkResourcesForServers() {
    const params = useParams()
    const [volumes, setvolumes] = useState<Server[]>([])
    const { containerRef, setTotalHits, datacenter } = useAppContext()
    const { goTo } = useNavigateTo()
    const [loading, setloading] = useState(false);


    useEffect(() => {
       (async () =>  {
        let id
        if(params.datacenterId){
            id = params.datacenterId
        
        }
        if(!id) return
        // const res:any = await searchVolumes({parentId:id, q:query, filter: 'cfs_type:=localServers', page:pagination.currentPage, limit:pagination.limit, offset:pagination.offset})
        // setvolumes(res.hits)
        setTotalHits(0)
        fetch(getDatacenterLocalServers({id})).then(res => res.json()).then(data => {
            setvolumes(data?.data?.tree)
    
          }).finally(() => setloading(false))
       })()
    }, [params.datacenterId]);
  return (
    <>

        <div className="pt-[14px] overflow-auto flex-1" style={renderHeightStyle(containerRef?.current?.clientHeight)}>
     
        <Collapse className='h-full flex flex-col space-y-2' defaultActiveKey={['0','1', '2', '3', '4']}>
            <>
           
       
    
            {volumes?.map((server,i) => (
                <Panel header={<p className='text-groupe'>{server.title}</p>} key={`${i}`}>
                    <div className='flex flex-wrap gap-y-5'>
                        {server.children?.map(volume => (
                             <ServerComponent
                             title={volume.title}
                       
                             icon={<div className='relative w-full h-full '>
                                 <ReactSvg src={`${volume.iconUrl}`} className='w-full h-full'
         
                                 />
                             
                                 
                             </div>}
                             key={volume.id}
  
                             active={volume.id === params.volumeId}
                             onSelect={() => goTo(`/volumes/${volume.id}`, {state: {document: volume}})}
                         />
                                

                        ))}
                
                    
                    </div>

                </Panel>
            ))}
            </>
        </Collapse>

        </div>
            <Outlet/>
    </>
  )
}
