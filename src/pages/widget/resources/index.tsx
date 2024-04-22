import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router';
import { Highlight, Publication, VolumeSearch } from '../../../types';
import { searchVolumeResource } from '../../../utils/search';
import Collapse, { Panel } from '../../../components/shared/Collapse';
import ObjectWithDropdown from '../../../components/shared/object/objectWithIcon/Withdrpdown';
import ResourceMenu from '../../../components/shared/menu/ResourceMenu';
import ReactSvg from '../../../components/shared/ReactSvg';
import { storageUrl } from '../../../constants/apiRequests';
import { ButtonLg } from '../../../components/shared/Buttons/ButtonLg';
import Publications from '../../../components/shared/publications';

export default function ResourcesLayout() {
    const params = useParams()
    const navigate = useNavigate()
    const [publications, setpublications] = useState<{document:Publication, highlight:Highlight}[]>([]);
    const [volumes, setvolumes] = useState<{document:VolumeSearch}[]>([])

    useEffect(() => {
       (async () =>  {
        let id
        if(params.serverId){
            id = params.serverId
        
        }
        if(params.volume){
            id = params.volume 
        }
        if(!id) return
        const res:any = await searchVolumeResource({id, query:''})
        console.log(res)
        setpublications(res.results[0]?.hits)
        setvolumes(res.results[1]?.hits)

       })()
    }, []);
  return (
    <div className="flex">

    <div className="pt-[14px] overflow-auto height-explorer flex-1">
    <Collapse defaultActiveKey={['shortcuts', 'publications', 'volumes']}>
        <>
        
            <Panel key={'volumes'} header={<p className='text-groupe'>Recently pinned volumes</p>}>
                <div className='pl-[14px] '>
                    <div className="flex flex-wrap gap-x-9">
                        {volumes && volumes.length>0 ? (
                            <>
                            {volumes.map(volume => (
                                    <ObjectWithDropdown
                                    title={volume.document.title.en}
                                    overlay={<ResourceMenu
                                        items={{shortcut:true}}
                               
                                    />}
                                    icon={<div className='relative w-full h-full '>
                                        <ReactSvg src={`${storageUrl}${volume.document.iconUrl}`} className='w-full h-full'
                 
                                        />
                                    
                                        
                                    </div>}
                                    key={volume.document.id}
                                    id={volume.document.id!}
                                    description={<p className='truncate'>{volume.document.breadcrumbs?.[0]?.en!}</p>
                                        
                                    
                                        
                                    }
                                    active={volume.document.id === params.volumeId}
                                    onSelect={() => {}}
                                />
                                ))}
                        
                            </>
                        ) : <p className='pl-2.5'>No volumes yet</p>}
                    </div>
                    {volumes && volumes?.length > 6 &&
                        <ButtonLg       
                            buttonProps={{
                                onClick: () => {}
                            }}
                        ><p>See all</p></ButtonLg>
                    
                    }
                
                </div>
            </Panel>
            <Panel key={'publications'} header={<p className='text-groupe'>Recent publications</p>}>
                <div className="pl-[19px]">
                    {publications && publications.length>0 ? <>
                        <Publications setRecheckPin={() => {}} publications={publications} handlePublicationSelection={() => {}} /> 
                        {publications.length > 6 && (
                            <ButtonLg
                            
                                buttonProps={{
                                    onClick: () => {}
                                }}
                            ><p>See all</p></ButtonLg>

                        )}
                    </> : <p className='pl-2.5'>No pinned publication yet</p>}
                    
                </div>
            </Panel>
           
        </>
    </Collapse>

</div>
<div className='w-[33%]'>
    <Outlet/>
</div>
    </div>
  )
}
