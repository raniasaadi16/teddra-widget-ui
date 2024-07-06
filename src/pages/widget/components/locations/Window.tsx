import { Drawer, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import WindowLayout from '../../../../components/shared/WindowLayout'
import TopBar from '../../../../components/shared/bars/TopBar'
import { getPopularCommunities } from '../../../../utils/search'
import { PartnerType, routeType, Server, ServerWithHomeDesq, VolumeSearch } from '../../../../types'
import { storageUrl } from '../../../../constants/apiRequests'
import { Datacenter } from '../../grid/components/datacenter'
import { Breadcrumb } from '../../../../components/shared/breadcrumb'
import Servers from './Servers'
import { getVolum, getVolumWithPartners } from '../../../../utils/requests'
import TitleBar from '../../../../components/shared/bars/TopBar/TitleBar'
import { useSearchParams } from 'react-router-dom'

export default function LocationsWindow({visible, setvisible, handleSelectLocation}:{visible:boolean, setvisible:any, handleSelectLocation : (data: {name:string, path:string, network:{coll:string , id:string}}) => void}) {
    const [thematics, setthematics] = useState<{document:ServerWithHomeDesq}[]>([]);
    const [selectedThematic, setselectedThematic] = useState<ServerWithHomeDesq | null>(null);
    const [routes, setroutes] = useState<routeType[]>([]);
    const [loading, setloading] = useState(false);
    const [searchParms, setSearchParams] = useSearchParams()
    useEffect(() => {
        
        setroutes([{
            icon: {src:'Globe', type: 'icon'},
            action:() => {
                setselectedThematic(null)
            }
        }])
        setselectedThematic(null)
    }, []);
    useEffect(() => {
        
        if(selectedThematic){
            setroutes(prev => [...prev,
                {
                    name: selectedThematic.title.en ,
                    
                    
                }
            ])
        }else{
            setroutes([{
                icon: {src:'Globe', type: 'icon'},
                action:() => {
                    setselectedThematic(null)
                }
            }])
        }
    }, [selectedThematic]);
    const handleSelect = (dc:ServerWithHomeDesq) => {
        setselectedThematic(dc)
        
    }

    useEffect(() => {
         getPopularCommunities().then((data:any) => setthematics(data.hits))
        
    
    }, [])

    const handleSelectVolume = (volume:VolumeSearch) => {
        let path = ''
        let network = {coll: '', id:''}
        if(volume.cfs_type === 'localServers'){
            path = `/${selectedThematic?.id}/${volume.id}`
            network = {id: selectedThematic?.id!, coll: 'datacenters'}
            fetch(getVolumWithPartners({id:volume.id, coll:'localServers'})).then(res => res.json()).then((data:{data:{volume:Server, partners:PartnerType[]}}) => {
                
                handleSelectLocation({name:volume.title.en, path, network })
                setvisible(false)
                if(data.data.partners?.filter(pr => pr.globale)?.[0]){
                    setSearchParams({url: data.data.partners?.filter(pr => pr.globale)?.[0].website })

                }else{
                    setSearchParams({url: '' })
                }
            }).finally(() => setloading(false))
    
        }else{
            setloading(true)
            fetch(getVolumWithPartners({id:volume.id, coll:volume.cfs_type})).then(res => res.json()).then((data:{data:{volume:Server, partners:PartnerType[]}}) => {
                const server = data.data.volume
                path = `/${selectedThematic?.id}/${server.serverId[0]}/${volume.cfs_type}/${volume.id}`
                network = {id: volume.id, coll: volume.cfs_type}
                handleSelectLocation({name:volume.title.en, path, network })
                setvisible(false)
                if(data.data.partners?.[0]){
                    setSearchParams({url: data.data.partners?.[0].website })

                }else{
                    setSearchParams({url: '' })
                }
            }).finally(() => setloading(false))
        }
     
    }
  return (
    <Drawer
    footer={null}
    visible={visible}
    closable={false}
    destroyOnClose
    width={'50%'}
    placement='right'
    style={{
        height: 'calc(100vh - 60px)',
        top: '0',
        right:17
    }}
>

    <WindowLayout>
        <div className="flex flex-col h-full teddra-rounded rounded-t-none overflow-hidden bg-sub-windows rounded-b">
    
                <TitleBar 
                    topbarTitle={{title:'Choose a volume', icon:{src:'Document', type:'icon'}}}
                    close={() => setvisible(false)}
                />
            <div className="bar-h px-2 flex items-center pt-2">
                <Breadcrumb 
                    routes={routes}
                />

            </div>
            <div className="flex-1">
                <Spin spinning={loading}>
                    <div className='overflow-auto h-[calc(100vh-116px)]'>
                        <div className='flex flex-wrap pl-[22px] gap-5 pt-5 pb-7 h-max'>
                            {selectedThematic ? (
                                <Servers handleSelect={handleSelectVolume} selectedThematic={selectedThematic.id}/>
                            ) : (
                                <>
                                    {thematics && thematics.map(dc => (
                                        <Datacenter key={dc.document.id} dc={{...dc.document,iconUrl: `${storageUrl}${dc.document.iconUrl}`}} placeholder={false} active={false} domain={''} select={() => handleSelect(dc.document)}  />

                                    ))}

                                </>

                            )}
                        
                        </div>

                    </div>

                </Spin>
            </div>
           
            </div>
            

    </WindowLayout>
</Drawer>
  )
}
