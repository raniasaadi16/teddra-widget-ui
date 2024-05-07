import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router'
import { Drawer, Modal, Spin } from 'antd'
import WindowLayout from '../../../components/shared/WindowLayout';
import TopBar from '../../../components/shared/bars/TopBar';
import { useAppContext } from '../../../context/appContext';


export default function GridLayout() {
    const [visible, setvisible] = useState(false);
    const navigate = useNavigate()
    const [height, setheight] = useState(300);
    const containerRef = useCallback((node:any) => {
        if (node !== null) {
            setheight(node.getBoundingClientRect().height - 47);
        }
      }, []);
    useEffect(() => {
        setvisible(true)
    }, []);


  return (
    <Drawer
        footer={null}
        visible={visible}
        closable={false}
        width={'60vw'}
        placement='left'
        style={{
            height: '70%',
            top: '20%',
            left:17
        }}
    >

        <WindowLayout>
            <div className="flex flex-col h-full teddra-rounded rounded-t-none overflow-hidden bg-sub-windows rounded-b" ref={containerRef}>
                <TopBar
                    title={{
                        topbarTitle:{title:`Search Grid`, icon:{src:'Document', type:'icon'}},
                        close: () => navigate('/')
                    }}
                    
                
                />
       
                <div className="flex-1 bg-sub-windows pl-[43px] ">
                    <div className="py-[14px] overflow-auto flex-1" style={{height}}>
                        <Outlet/>

                    </div>

                


                </div>
              
            </div> 

        </WindowLayout>
    </Drawer>
  )
}
