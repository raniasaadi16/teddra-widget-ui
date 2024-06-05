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
import { getVolum, getVolumWithPartners } from '../../utils/requests';
import PaginationComponent from '../../components/shared/pagination';
import { storageUrl } from '../../constants/apiRequests';
import { Breadcrumb } from '../../components/shared/breadcrumb';
import { Close } from '../../components/icons';
import ServerOverlay from '../../components/shared/breadcrumb/overlays/ServerOverlay';

export default function WidgetLayout() {
    const [visible, setvisible] = useState(false);
    const navigate = useNavigate()
    const params = useParams()
    const { setDatacenter,containerRef,setsponsors,  server, setServer, setVolume, datacenter, breadcrum,setWindowHeight, setdisable, disabled, query, setQuery, pagination, setPaginate, totalHits, setresourcesWidth, currentTab, volume, clearSearch} = useAppContext()
    const [loading, setloading] = useState(false);
    const location = useLocation()
    const [all, setall] = useState(false);

    useEffect(() => {
        setvisible(true)
        setWindowHeight(containerRef?.current?.clientHeight)
        setresourcesWidth(containerRef?.current?.clientWidth)
    }, [containerRef?.current]);
    useSetBreadcrumb({datacenter:datacenter?{id:datacenter?.id, name:datacenter?.title, icon:{src:datacenter.iconUrl, type: 'image'}} : null, server:server?{id:server?.id, name:server?.title, overlay: <ServerOverlay id={server.id}/>} : null, volume:volume?{id:volume?.id, name:volume?.title} : null })
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
              fetch(getVolumWithPartners({id:params.serverId, coll:'localServers'})).then(res => res.json()).then(data => {
                console.log(data, params.serverId)
                setServer(data.data.volume);
                !params.volume && setsponsors(data.data.sponsors)
              }).finally(() => setloading(false))
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
              fetch(getVolumWithPartners({id:params.volume, coll:params.type})).then(res => res.json()).then(data => {
             
                setVolume(data.data.volume)
                setsponsors(data.data.sponsors)
              }).finally(() => setloading(false))
          }
           
        })()        
      }, [params.volume])

      useEffect(() => {
        if(location.pathname.includes('all/publications')){
          setdisable({publicationBar:false, query:false, filter:false})

        }else{
          if(currentTab === 'network'){
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
        width={'40vw'}
        placement='left'
        style={{
            height: '100vh',
            top: '0',
            left:0,
        }}
        // getContainer={() => rootRef?.current}
    >

        <WindowLayout>
            <div className="flex flex-col h-full overflow-hidden bg-sub-windows " ref={containerRef}>
              {/* {datacenter && (

                <TopBar
                  breadcrum={breadcrum}
                    // title={{
                    //     topbarTitle:{title:`Teddra - ${volume ? volume.title : datacenter?.title}`, icon:{src:`${volume ? volume.iconUrl : datacenter?.iconUrl}`, type:'image'}},
                    //     close: () => {
                        //   setvisible(false);
                        //   setTimeout(() => {
                        //     navigate('/')
                            
                        //   }, 200);
                        // }
                    // }}
                    
                
                />
              )} */}
                <div className='flex pl-[25px] pr-3 bar-h justify-between items-center'>
                  {breadcrum && (
                      <Breadcrumb
                        className=''
                        {...breadcrum}
                      
                      />

                  )}
                    <button className='cursor-pointer no-dragable hover:bg-teddra-red hover:text-white hover:fill-white w-[24px] h-[24px] border-transparent flex justify-center items-center rounded' onClick={() => {
                              setvisible(false);
                              setTimeout(() => {
                                navigate('/')
                                
                              }, 200);
                            }
                    }>
                    <Close className='icon-sm ' />
                  </button>
    
              </div>
                <Header/>
                <div className="border-b border-main">
                <div className='flex space-x-2 bg-sub-windows items-center bar-h pr-4'>
                    <div className="flex-1">
                        <PathBar 
                            search={   <Search placeholder='Search' disabled={disabled.query} value={query} onChange={e => setQuery(e.target.value)}/>}
                        />
                    </div>
                </div>

                </div>
                <div className='pl-[25px] pr-4'>
                   <PanelBar isPublication={!disabled.publicationBar} noDetails={currentTab === 'grid'}/>

                </div>
                <div className="flex-1 bg-sub-windows pl-[6px] ">
                    <Spin spinning={loading}>
                     <Outlet/>

                    </Spin>

                </div>
                <div className="border-t border-main">
                   <div className="flex justify-between bar-h items-center px-5">
                    <div className="flex-1">
                      {(location.pathname.includes('all')) && (
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
