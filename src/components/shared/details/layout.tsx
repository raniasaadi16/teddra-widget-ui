import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Drawer, Spin,  } from 'antd'
import { useAppContext } from '../../../context/appContext'
import DetailsTopBar from '../bars/ResourcesBar/DetailsPanel'
import { Close } from '../../icons'
import { renderDtailsHeightStyle } from '../../../utils/utils'



export default function DetailsLayout({children, loading}: {children:JSX.Element, loading:boolean}) {

    const { containerRef } = useAppContext()
    const [visible, setvisible] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
     
      setvisible(true)
    },[])
  return (
    <Drawer
      visible={visible}
      footer={null}
      width={'30vw'}
      placement='right'
      getContainer={() => containerRef?.current}
      onClose={() => navigate(-1)}
      closable={false}
      style={{
        right: -8
      }}
    >

        <div className='h-full w-full bg-white relative z-[100]'>
              
              <div className="border-b border-main px-2 flex justify-between space-x-3 items-center bar-h" >
                  <DetailsTopBar/>
                  <button className='cursor-pointer no-dragable hover:bg-black hover:text-white hover:fill-white w-[24px] h-[24px] border-transparent flex justify-center items-center rounded' onClick={() => navigate(-1)}>
                      <Close className='icon-sm ' />
                  </button>

              </div>
              <div className={` overflow-auto`} style={renderDtailsHeightStyle(containerRef?.current?.clientHeight)}>
                  <Spin spinning={loading}>
                      {children}
                  </Spin>
              </div>
        </div>

  </Drawer>
  )
}
