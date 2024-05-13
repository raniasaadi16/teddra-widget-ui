import React, { useEffect, useRef, useState } from 'react'
import TopBar from '../../components/shared/bars/TopBar'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { Drawer, Modal, Spin } from 'antd'
import WindowLayout from '../../components/shared/WindowLayout';
import Header from './components/Header';
import PathBar from '../../components/shared/bars/TopBar/Pathbar';
import { Search } from '../../components/shared/input/Search';
import { PanelBar } from '../../components/shared/bars/ResourcesBar';
import useSetBreadcrumb from '../../hooks/useSetBreadcrumb';
import { useAppContext } from '../../context/appContext';
import { getVolum } from '../../utils/requests';
import PaginationComponent from '../../components/shared/pagination';

export default function WidgetLayout() {
    const [visible, setvisible] = useState(false);
    const navigate = useNavigate()
    const params = useParams()
    const { setDatacenter,containerRef,  server, setServer, setVolume, datacenter, breadcrum,setWindowHeight, setdisable, disabled, query, setQuery, pagination, setPaginate, totalHits, setresourcesWidth, currentTab, volume, clearSearch} = useAppContext()
    const [loading, setloading] = useState(false);
    const location = useLocation()
    const [all, setall] = useState(false);

    useEffect(() => {
        setvisible(true)
        setWindowHeight(containerRef?.current?.clientHeight)
        setresourcesWidth(containerRef?.current?.clientWidth)
    }, [containerRef?.current]);
    useSetBreadcrumb({datacenter:datacenter?{id:datacenter?.id, name:datacenter?.title} : null, server:server?{id:server?.id, name:server?.title} : null, volume:volume?{id:volume?.id, name:volume?.title} : null })
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

              console.log('fetch server')
              setloading(true)
              fetch(getVolum({id:params.serverId, coll:'localServers'})).then(res => res.json()).then(data => setServer(data.data)).finally(() => setloading(false))
          }
           
        })()        
      }, [params.serverId])

      useEffect(() => {
        (async () => {
          if(!params.volume || !params.type) {
            setVolume(null)
          }else{

              console.log('fetch volume')
              setloading(true)
              fetch(getVolum({id:params.volume, coll:params.type})).then(res => res.json()).then(data => setVolume(data.data)).finally(() => setloading(false))
          }
           
        })()        
      }, [params.volume])

      useEffect(() => {
        if(location.pathname.includes('all/publications')){
          setdisable({publicationBar:false, query:false, filter:false})

        }else{
          if(currentTab === 'network' && params.volume){
            setdisable({publicationBar:true, query:true, filter:true})

          }else{
            setdisable({publicationBar:true, query:false, filter:true})

          }

        }

        if(location.pathname.includes('all')){
          setall(true)
        }else{
          setall(false)
        }
        
      }, [location.pathname, currentTab, params]);

      useEffect(() => {
        
        clearSearch()
      }, [currentTab, all]);


    
  return (
    <Drawer
        footer={null}
        visible={visible}
        closable={false}
        width={'60vw'}
        placement='left'
        style={{
            height: '70vh',
            top: 'calc(30vh - 110px)',
            left:17
        }}
    >

        <WindowLayout>
            <div className="flex flex-col h-full teddra-rounded rounded-t-none overflow-hidden bg-sub-windows rounded-b" ref={containerRef}>
                <TopBar
                    title={{
                        topbarTitle:{title:`Teddra - ${volume ? volume.title : datacenter?.title}`, icon:{src:'Document', type:'icon'}},
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
                    <Search placeholder='Search' disabled={disabled.query} value={query} onChange={e => setQuery(e.target.value)}/>
                </div>

                </div>
                <div className='pl-[43px] pr-4'>
                   <PanelBar isPublication={!disabled.publicationBar} noDetails={currentTab === 'grid'}/>

                </div>
                <div className="flex-1 bg-sub-windows pl-[43px] pr-4">
                    <Spin spinning={loading}>
                     <Outlet/>

                    </Spin>

                </div>
                <div className="border-t border-main">
                   <div className="flex justify-between bar-h items-center px-5">
                    <div className="flex-1">
                      {(location.pathname.includes('all') || currentTab === 'network') && (
                        <PaginationComponent
                              disabled={disabled.query}
                              pagination={pagination}
                              setPaginate={setPaginate}
                              totalHits={totalHits}    
                              hidePanel={false}
                          />

                      )}
                      
                    </div>
                     <button className='px-4 py-1.5 bg-skin-fill-inverted text-skin-inverted rounded'>Download Teddra</button>
                   </div>

                </div>
            </div> 

        </WindowLayout>
    </Drawer>
  )
}
