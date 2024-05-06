import { Drawer } from 'antd'
import React, { useEffect, useState } from 'react'
import WindowLayout from '../../../../components/shared/WindowLayout'
import TopBar from '../../../../components/shared/bars/TopBar'
import { getPopularCommunities } from '../../../../utils/search'
import { routeType, ServerWithHomeDesq, VolumeSearch } from '../../../../types'
import { storageUrl } from '../../../../constants/apiRequests'
import { Datacenter } from '../../grid/components/datacenter'
import { Breadcrumb } from '../../../../components/shared/breadcrumb'
import Servers from './Servers'

export default function LocationsWindow({visible, setvisible, handleSelectLocation}:{visible:boolean, setvisible:any, handleSelectLocation : (data: {name:string, path:string}) => void}) {
    const [thematics, setthematics] = useState<{document:ServerWithHomeDesq}[]>([]);
    const [selectedThematic, setselectedThematic] = useState<ServerWithHomeDesq | null>(null);
    const [routes, setroutes] = useState<routeType[]>([]);

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
        if(volume.cfs_type === 'localServers'){
            path = `/${selectedThematic?.id}/${volume.id}`
        }else{
            path = `/${selectedThematic?.id}/${volume.parentId[0]}/${volume.cfs_type}/${volume.id}`
        }
        handleSelectLocation({name:volume.title.en, path})
        setvisible(false)
    }
  return (
    <Drawer
    footer={null}
    visible={visible}
    closable={false}
    destroyOnClose
    width={'620px'}
    placement='right'
    style={{
        height: '500px',
        top: 'calc(100vh - 570px)',
        right:17
    }}
>

    <WindowLayout>
        <div className="flex flex-col h-full teddra-rounded rounded-t-none overflow-hidden bg-sub-windows rounded-b">
            <TopBar
                title={{
                    topbarTitle:{title:'Choose a volume', icon:{src:'Document', type:'icon'}},
                    close: () => setvisible(false)
                }}
                
            />
            <div className="bar-h px-2 flex items-center pt-2">
                <Breadcrumb 
                    routes={routes}
                />

            </div>
            <div className="flex-1">
                
                <div className='flex flex-wrap pl-[22px] gap-5 pt-5 pb-7 overflow-auto h-[420px]'>
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
           
            </div>
            

    </WindowLayout>
</Drawer>
  )
}
