import React, { useEffect, useState } from 'react'
import Collapse, { Panel } from '../../../components/shared/Collapse';
import { Datacenter } from './components/datacenter';
import { storageUrl } from '../../../constants/apiRequests';
import { ServerWithHomeDesq } from '../../../types';
import { getPopularCommunities } from '../../../utils/search';
import { Spin } from 'antd';
import { useNavigate } from 'react-router';
import { useGridContext } from './context/gridContext';


export default function GridLayout() {
    // const [loading, setloading] = useState(false);
    // const [popular, setpopular] = useState<{document:ServerWithHomeDesq}[]>([]);
    // const navigate = useNavigate()
    // const { setSelectedNetwork } = useGridContext()
 
    // useEffect(() => {
    //     getPopularCommunities().then((data:any) => setpopular(data.hits))

    // }, [])

    
    // const handleNavigate = (id:string, title:string) => {
    //     setSelectedNetwork(title)
    //     navigate(`/widget/grid/${id}`)
    // }
  return (
    <>
       
            {/* <Spin spinning={loading}>

                <Collapse className='h-full flex flex-col space-y-2 pb-5' defaultActiveKey={['popular', 'pinned']}>
                    <>
                
            
                    <Panel header={<p className='text-groupe'>{'Popular'}</p>} key={'popular'}>
                        <div className='flex flex-wrap pl-[22px] gap-5 pt-5 pb-7'>
                            {popular && popular.map(dc => (
                                <Datacenter key={dc.document.id} dc={{...dc.document,iconUrl: `${storageUrl}${dc.document.iconUrl}`}} placeholder={false} active={false} domain={''
                                }
                                handleNavigate={(id) => handleNavigate(id, dc.document.title.en)}
                                />

                            ))}
                        
                        </div>

                    </Panel>
           
                    </>
                </Collapse>

            </Spin> */}

   
    
    </>

  )
}
