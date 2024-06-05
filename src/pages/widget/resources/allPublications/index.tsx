import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router';
import { Highlight, Publication } from '../../../../types';
import { useAppContext } from '../../../../context/appContext';
import useNavigateTo from '../../useNavigateTo';
import { searchPublications } from '../../../../utils/search';
import { renderHeightStyle } from '../../../../utils/utils';
import Collapse, { Panel } from '../../../../components/shared/Collapse';
import Publications from '../../../../components/shared/publications';
import { useHandleLimits } from '../../../../hooks/useHandleLimits';

export default function AllPublicationsLayout() {
    const params = useParams()
    const [publications, setpublications] = useState<{document:Publication, highlight:Highlight}[]>([]);
    const { containerRef, query, selectedPubType, setTotalHits, pagination, setPaginate, totalHits } = useAppContext()
    const { goTo } = useNavigateTo()
    useHandleLimits({type: 'publication', windowHeight: containerRef?.current?.clientHeight, setPaginate, resourcesWidth:containerRef?.current?.clientWidth})
    const search = async (q:string) => {
        const res:any = await searchPublications({volumeId:params.volume ? params.volume : params.serverId!, q:q.length > 1 ? q : '' ,type:selectedPubType,  page:pagination.currentPage, limit:pagination.limit, offset:pagination.offset})
        setpublications(res.hits)
        setTotalHits(res.found)
    

    }
    useEffect(() => {
        (async () => {
              
                await search(query)

               
        
        })()
    }, [query, selectedPubType?.value, pagination.currentPage, pagination.limit, pagination.offset, params.volume, params.serverId]);



    
  return (
    <>

        <div className="pt-[14px] overflow-auto flex-1" style={renderHeightStyle(containerRef?.current?.clientHeight)}>
            <Collapse defaultActiveKey={['publications']}>
                <>
                
        
                    <Panel key={'publications'} header={<p className='text-groupe'>{totalHits} publications</p>}>
                        <div className="pl-[19px]">
                            {publications && publications.length>0 ? <>
                                <Publications setRecheckPin={() => {}} publications={publications} handlePublicationSelection={(publication) => goTo(`/all/publications/${publication.id}`, {state: {item:publication, url: publication.website}})} /> 
                        
                            </> : <p className='pl-2.5'>No publication </p>}
                            
                        </div>
                    </Panel>
                
                </>
            </Collapse>

        </div>
            <Outlet/>
    </>
  )
}
