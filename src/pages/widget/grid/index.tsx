import React, { useEffect, useState } from 'react'
import Collapse, { Panel } from '../../../components/shared/Collapse';
import { Datacenter } from './components/datacenter';
import { storageUrl } from '../../../constants/apiRequests';
import { ServerWithHomeDesq } from '../../../types';
import { getDomainsAndFeaturedDcs } from '../../../utils/requests';
import { getPopularCommunities } from '../../../utils/search';
import { Spin } from 'antd';
import { useAppContext } from '../../../context/appContext';
import { renderHeightStyle } from '../../../utils/utils';


export default function GridLayout() {
    const [domains, setdomains] = useState<ServerWithHomeDesq[]>([]);
    const [loading, setloading] = useState(false);
    const [popular, setpopular] = useState<{document:ServerWithHomeDesq}[]>([]);
    const { containerRef } = useAppContext()
 
    useEffect(() => {
            setloading(true)
            fetch(getDomainsAndFeaturedDcs).then(res => res.json()).then(data => setdomains(data.domains)).finally(() => setloading(false))
             getPopularCommunities().then((data:any) => setpopular(data.hits))
            
        
    }, [])
  return (
    <>
        <div className="pt-[14px] overflow-auto flex-1" style={renderHeightStyle(containerRef?.current?.clientHeight)}>
            <Spin spinning={loading}>

                <Collapse className='h-full flex flex-col space-y-2 pb-5' defaultActiveKey={['popular', 'pinned']}>
                    <>
                
            
                    <Panel header={<p className='text-groupe'>{'Popular'}</p>} key={'popular'}>
                        <div className='flex flex-wrap pl-[22px] gap-5 pt-5 pb-7'>
                            {popular && popular.map(dc => (
                                    <Datacenter key={dc.document.id} dc={{...dc.document,iconUrl: `${storageUrl}${dc.document.iconUrl}`}} placeholder={false} active={false} domain={domains?.filter(d => dc.document.domainId === d.id)?.[0]?.title!
                                    }/>

                            ))}
                        
                        </div>

                    </Panel>
                    {domains?.map((domain,i) => (
                        <Panel header={<p className='text-groupe'>{domain.title}</p>} key={`${i}`}>
                            <div className='flex flex-wrap pl-[22px] gap-5 pt-5 pb-7'>
                                {domain.children?.map(dc => (
                                    <Datacenter dc={dc} placeholder={false} active={false} domain={domain.title} key={dc.id}/>

                                ))}
                        
                            
                            </div>

                        </Panel>
                    ))}
                    </>
                </Collapse>

            </Spin>

        </div>
   
    
    </>

  )
}
