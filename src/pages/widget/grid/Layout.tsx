import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'
import { Drawer } from 'antd'
import WindowLayout from '../../../components/shared/WindowLayout';
import { useAppContext } from '../../../context/appContext';
import TitleBar from '../../../components/shared/bars/TopBar/TitleBar';
import { Breadcrumb } from '../../../components/shared/breadcrumb';
import { useGridContext } from './context/gridContext';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import { getPopularCommunities } from '../../../utils/search';
import { ServerWithHomeDesq } from '../../../types';
import ReactSvg from '../../../components/shared/ReactSvg';
import { storageUrl } from '../../../constants/apiRequests';
import { Datacenter } from './components/datacenter';
import { AboutDc } from './components/aboutDc';
import Collapse, { Panel } from '../../../components/shared/Collapse';
import { getDomainsAndFeaturedDcs } from '../../../utils/requests';


export default function GridLayout() {
    const [visible, setvisible] = useState(false);
    const navigate = useNavigate()
    const [height, setheight] = useState(300);
    const [popular, setpopular] = useState<{document:ServerWithHomeDesq}[]>([]);
    const [selectedNetwork, setselectedNetwork] = useState<ServerWithHomeDesq | null>(null);
    const [domains, setdomains] = useState<ServerWithHomeDesq[] | null>(null);
    // const containerRef = useCallback((node:any) => {
    //     if (node !== null) {
    //         setheight(node.getBoundingClientRect().height - 47);
    //     }
    //   }, []);
    const params = useParams()
    
    const { containerRef } = useAppContext()


    useEffect(() => {
        setvisible(true)
        setheight(containerRef?.current?.clientHeight - 47)
    }, [containerRef?.current]);

    useEffect(() => {
     if(!params.datacenterId){
        setselectedNetwork(null)
     }
    }, [params.datacenterId])
    useEffect(() => {
        getPopularCommunities().then((data:any) => setpopular(data.hits))
        fetch(getDomainsAndFeaturedDcs).then(res => res.json()).then(data => setdomains(data.domains))
    }, [])

    
    const handleNavigate = (id:string, dc:any) => {
        setselectedNetwork({...dc, title: dc.title?.en ? dc.title.en : dc.title, description: dc.description?.en ?dc.description.en : dc.description })
        navigate(`/widget/grid/${id}`)
    }

  return (
    <Drawer
        footer={null}
        visible={visible}
        closable={false}
        width={'40vw'}
        placement='left'
        style={{
            height: 'calc(100vh - 47px)',
            top: '0',
            left:0,
        }}
        // getContainer={() => rootRef?.current}
    >

        <WindowLayout>
            <div className="flex flex-col h-full overflow-hidden bg-sub-windows " ref={containerRef}>
                <div className="border-b  border-main">
                    <TitleBar
                        topbarTitle={{title:`Teddra Search Grid`, icon:{src:'TeddraLogo', type:'icon'}}}
                        close={() => navigate('/')}
                    />

                </div>
              
                <div className="flex-1 bg-sub-windows pl-[6px] ">
                    <div className=" overflow-auto flex-1 flex" style={{height}}>
                        <div className='w-[30%] border-r border-main pl-6 pr-1 pt-5 space-y-7  overflow-auto h-[100vh-30px]'>
                            <div>
                                <p className="text-groupe">Popular</p>
                                <div className='pt-3 -ml-4'>
                                    {popular && popular.map(dc => (
                                        <button key={dc.document.id} className={`w-full py-1.5 px-4 flex items-center rounded space-x-2 ${params.datacenterId === dc.document.id ? 'bg-skin-fill-inverted text-skin-inverted' :'bg-hover-transparent'}`} onClick={() => handleNavigate(dc.document.id, dc.document)}>
                                            <ReactSvg className='icon-sm' src={`${storageUrl}${dc.document.iconUrl}`}/>
                                            {/* <img src={dc.document.image ? (!dc.document.image.includes('unsplash') ? [dc.document.image.split('?')[0], '_800x571','?',dc.document.image.split('?')[1] ].join('') : dc.document.image) : ''} alt="" className='w-[40px] h-[30px] object-cover rounded-sm' /> */}
                                             <p>{dc.document.title.en}</p>
                                        </button>
                                    ))}
                                </div>

                            </div>
                            {domains && domains.map(domain => (
                                <div key={domain.id}>
                                    <p className="text-groupe">{domain.title}</p>
                                    <div className='pt-3 -ml-4'>
                                    {domain.children && domain.children.map(dc => (
                                        <button key={dc.id} className={`w-full py-1.5 px-4 flex items-center rounded space-x-2 ${params.datacenterId === dc.id ? 'bg-skin-fill-inverted text-skin-inverted' :'bg-hover-transparent'}`} onClick={() => handleNavigate(dc.id, dc)}>
                                            <ReactSvg className='icon-sm' src={`${dc.iconUrl}`}/>
                                            {/* <img src={dc.image ? (!dc.image.includes('unsplash') ? [dc.image.split('?')[0], '_800x571','?',dc.image.split('?')[1] ].join('') : dc.image) : ''} alt="" className='w-[40px] h-[30px] object-cover rounded-sm' /> */}
                                            <p>{dc.title}</p>
                                        </button>
                                    ))}
                                </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 pl-3 pt-4 overflow-auto h-[100vh-30px]">
                            {selectedNetwork && (
                                <Collapse className='flex flex-col space-y-2' defaultActiveKey={['0','1', '2', '3', '4']}>
                
                                        <Panel header={<p className='text-groupe'>About</p>} key={'0'}>
                                            <div className='pl-3'>
                                                <div className='bg-hover-transparent hover-lg w-max'>
                                                
                                                        <AboutDc dc={selectedNetwork} active={false} domain=''/>
                                                    

                                                </div>

                                            </div>
                                        </Panel>

                    
                                </Collapse>

                            )}

                            <Outlet/>

                        </div>

                    </div>

                


                </div>
              
            </div> 

        </WindowLayout>
    </Drawer>
  )
}
