import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router';
import { Server, VolumeSearch } from '../../../../types';
import Collapse, { Panel } from '../../../../components/shared/Collapse';
import ReactSvg from '../../../../components/shared/ReactSvg';
import { useAppContext } from '../../../../context/appContext';
import { renderHeightStyle } from '../../../../utils/utils';
import useNavigateTo from '../../useNavigateTo';
import { getDatacenterLocalServers, getSpecialityDrivess } from '../../../../utils/requests';
import ServerComponent from '../ServerComponent';

export default function NetworkResourcesForVolumes() {
    const params = useParams()
    const [volumes, setvolumes] = useState<Server[]>([])
    const {  containerRef, volume, datacenter} = useAppContext()
    const { goTo } = useNavigateTo()
    const [loading, setloading] = useState(false);


    useEffect(() => {
       (async () =>  {
        if(!params.datacenterId){
            return
        
        }
        if(!volume) return
        if(!datacenter) return
        
        if(params.type === 'specDrives'){

            fetch(getSpecialityDrivess({id:volume.id, dcId:params.datacenterId})).then(res => res.json()).then(data => {
                setvolumes(data?.data?.tree)
              }).finally(() => setloading(false))
        }else{
            fetch(getDatacenterLocalServers({id:datacenter.id})).then(res => res.json()).then(data => {
                setvolumes(data?.data?.tree)
        
              }).finally(() => setloading(false))
        }


       })()
    }, [volume?.id]);


  return (
    <>

        <div className="pt-[14px] " style={renderHeightStyle(containerRef?.current?.clientHeight)}>
        <Collapse className=' flex flex-col space-y-2' defaultActiveKey={['0','1', '2', '3', '4']}>
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
