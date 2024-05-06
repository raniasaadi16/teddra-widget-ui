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
import { useAppContext } from '../../../context/appContext';
import { renderHeightStyle } from '../../../utils/utils';
import useNavigateTo from '../useNavigateTo';

export default function ResourcesLayout() {
    const params = useParams()
    const [publications, setpublications] = useState<{document:Publication, highlight:Highlight}[]>([]);
    const [volumes, setvolumes] = useState<{document:VolumeSearch}[]>([])
    const { query , containerRef} = useAppContext()
    const [totalHits, settotalHits] = useState({volumes: 0, publications:0});
    const { goTo } = useNavigateTo()
    useEffect(() => {
       (async () =>  {
        let id
        if(params.serverId){
            id = params.serverId
        
        }
        if(params.volume){
            id = params.volume 
        }
        console.log(query, params, id)
        if(!id) return
        const res:any = await searchVolumeResource({id, query: query, filter: `${params.volume ? 'cfs_type:!=specDrives' : 'cfs_type:!=localServers'}`})
        setpublications(res.results[0]?.hits)
        setvolumes(res.results[1]?.hits)
        settotalHits({volumes: res.results[1]?.found, publications:res.results[0]?.found})

       })()
    }, [query, params.serverId, params.volume]);
  return (
    <>

    <div className="pt-[14px] overflow-auto flex-1" style={renderHeightStyle(containerRef?.current?.clientHeight)}>
        <Collapse defaultActiveKey={['publications', 'volumes']}>
            <>
            
                <Panel key={'volumes'} header={<p className='text-groupe'>Recently added volumes</p>}>
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
                                        onSelect={() => goTo(`/volumes/${volume.document.id}`, {state: volume.document})}
                                    />
                                    ))}
                            
                                </>
                            ) : <p className='pl-2.5'>No volumes yet</p>}
                        </div>
                        {volumes && totalHits.volumes > 7 &&
                            <ButtonLg       
                                buttonProps={{
                                    onClick: () => goTo('/all/volumes', {})
                                }}
                            ><p>See all ({totalHits.volumes})</p></ButtonLg>
                        
                        }
                    
                    </div>
                </Panel>
                <Panel key={'publications'} header={<p className='text-groupe'>Recent added publications</p>}>
                    <div className="pl-[19px]">
                        {publications && totalHits.publications>0 ? <>
                            <Publications setRecheckPin={() => {}} publications={publications} handlePublicationSelection={(publication) => goTo(`/publications/${publication.id}`, {state: {item:publication, url: publication.website}})} /> 
                            {publications.length > 6 && (
                                <ButtonLg
                                
                                    buttonProps={{
                                        onClick: () => goTo('/all/publications', {})
                                    }}
                                ><p>See all ({totalHits.publications})</p></ButtonLg>

                            )}
                        </> : <p className='pl-2.5'>No publication yet</p>}
                        
                    </div>
                </Panel>
            
            </>
        </Collapse>

    </div>
    <div className='w-[33%]'>
        <Outlet/>
    </div>
    </>
  )
}
