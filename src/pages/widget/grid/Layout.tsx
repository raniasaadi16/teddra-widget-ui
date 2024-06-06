import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'
import { Drawer } from 'antd'
import WindowLayout from '../../../components/shared/WindowLayout';
import { useAppContext } from '../../../context/appContext';
import TitleBar from '../../../components/shared/bars/TopBar/TitleBar';
import { Breadcrumb } from '../../../components/shared/breadcrumb';
import { useGridContext } from './context/gridContext';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';


export default function GridLayout() {
    const [visible, setvisible] = useState(false);
    const navigate = useNavigate()
    const [height, setheight] = useState(300);
    // const containerRef = useCallback((node:any) => {
    //     if (node !== null) {
    //         setheight(node.getBoundingClientRect().height - 47);
    //     }
    //   }, []);
    const params = useParams()
    
    const { containerRef } = useAppContext()
    const { setSelectedNetwork, selectedNetwork } = useGridContext()


    useEffect(() => {
        setvisible(true)
        setheight(containerRef?.current?.clientHeight - 47)
    }, [containerRef?.current]);

    useEffect(() => {
     if(!params.datacenterId){
        setSelectedNetwork(null)
     }
    }, [params.datacenterId])
    

  return (
    <Drawer
        footer={null}
        visible={visible}
        closable={false}
        width={'47vw'}
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
              
                <TitleBar
                    topbarTitle={{title:`Teddra Search Grid`, icon:{src:'TeddraLogo', type:'icon'}}}
                    close={() => navigate('/')}
                />
                <div className=" space-x-2 bar-h menubar items-center pl-[29px] pr-2 flex">
                    <button className='p-1.5 bg-hover-transparent rounded no-dragable disabled:fill-skin-muted' disabled={!selectedNetwork} onClick={() => navigate(-1)} >
                        <ArrowLeftIcon className='icon-sm'/>
                    </button>
              
                    <Breadcrumb 
                        routes={[
                            {
                                icon:{src:'Globe' , type:'icon'},
                                action: () => navigate('/widget/grid')
                            }, 
                            ...selectedNetwork ? [{
                                name: selectedNetwork
                            }] : []
                        ]}
                    />
                </div>
                <div className="flex-1 bg-sub-windows pl-[6px] ">
                    <div className="py-[14px] overflow-auto flex-1" style={{height}}>
                        <Outlet/>

                    </div>

                


                </div>
              
            </div> 

        </WindowLayout>
    </Drawer>
  )
}
