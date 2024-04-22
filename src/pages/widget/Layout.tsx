import React, { useEffect, useState } from 'react'
import TopBar from '../../components/shared/bars/TopBar'
import { Outlet, useNavigate, useParams } from 'react-router'
import { Drawer, Modal, Spin } from 'antd'
import WindowLayout from '../../components/shared/WindowLayout';
import Header from './components/Header';
import PathBar from '../../components/shared/bars/TopBar/Pathbar';
import { Search } from '../../components/shared/input/Search';
import { PanelBar } from '../../components/shared/bars/ResourcesBar';
import useSetBreadcrumb from '../../hooks/useSetBreadcrumb';
import { useAppContext } from '../../context/appContext';
import { getVolume } from '../../utils/search';
import { getVolum } from '../../utils/requests';

export default function WidgetLayout() {
    const [visible, setvisible] = useState(false);
    const navigate = useNavigate()
    const params = useParams()
    const { setDatacenter,  server, setServer, datacenter, breadcrum} = useAppContext()
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setvisible(true)
    }, []);
    useSetBreadcrumb({datacenter:datacenter?{id:datacenter?.id, name:datacenter?.title} : null, server:server?{id:server?.id, name:server?.title} : null})
    useEffect(() => {

        (async () => {
          if(!params.datacenterId) {
            setDatacenter(null)
          }else{

              console.log('fetch datacenter')
              setloading(true)
              fetch(getVolum({id:params.datacenterId, coll:'datacenters'})).then(res => res.json()).then(data => setDatacenter(data.data)).finally(() => setloading(false))
          }
          
          
    
          
        })()        
      }, [params.datacenterId])
      useEffect(() => {
        (async () => {
          if(!params.serverId) {
            setServer(null)
          }else{

              console.log('fetch datacenter')
              setloading(true)
              fetch(getVolum({id:params.serverId, coll:'localServers'})).then(res => res.json()).then(data => setServer(data.data)).finally(() => setloading(false))
          }
           
        })()        
      }, [params.serverId])
  return (
    <Drawer
        footer={null}
        visible={visible}
        closable={false}
        width={'60vw'}
        placement='left'
        style={{
            height: '70%',
            top: '24%',
            left:17
        }}
    >

        <WindowLayout>
            <div className="flex flex-col h-full teddra-rounded rounded-t-none overflow-hidden bg-sub-windows rounded-b">
                <TopBar
                    title={{
                        topbarTitle:{title:'Widget', icon:{src:'Document', type:'icon'}},
                        close: () => navigate('/')
                    }}
                    
                
                />
                <Header/>
                <div className="border-b border-main">
                <div className='flex space-x-2 bg-sub-windows items-center bar-h pr-4'>
                    <div className="flex-1">
                        <PathBar 
                            Breadcrumb={breadcrum}
                        />
                    </div>
                    <Search placeholder='Search'/>
                </div>

                </div>
                <div className='pl-[43px] pr-4'>
                   <PanelBar/>

                </div>
                <div className="flex-1 bg-sub-windows pl-[43px] pr-4">
                    <Spin spinning={loading}>
                     <Outlet/>

                    </Spin>

                </div>
                <div className="border-t border-main">
                   <div className="flex justify-end bar-h items-center px-5">
                     <button className='px-4 py-1.5 bg-skin-fill-inverted text-skin-inverted rounded'>Download Teddra</button>
                   </div>

                </div>
            </div> 

        </WindowLayout>
    </Drawer>
  )
}
