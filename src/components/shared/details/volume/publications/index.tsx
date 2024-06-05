import React, { useEffect, useState } from 'react'
import Collapse, { Panel } from '../../../Collapse';
import { useDetaillsContext } from '../../context/detailsContext';
import { Highlight, Publication } from '../../../../../types';
import Publications from '../../../publications';
import { searchPublications } from '../../../../../utils/search';
import { useNavigate, useParams } from 'react-router';
import { useHandleLimits } from '../../../../../hooks/useHandleLimits';
import { useAppContext } from '../../../../../context/appContext';
import PaginationComponent from '../../../pagination';
import { renderVolumenDetailsPublicationsHeightStyle } from '../../../../../utils/utils';
import Input from '../../../input';

export default function VolumPublications() {
    const [publications, setpublications] = useState<{document:Publication, highlight:Highlight}[]>([]);
    const { totalHits, pagination, volume, setTotalHits, setPaginate } = useDetaillsContext()
    const [query, setquery] = useState('');
    const navigate = useNavigate()
    const { containerRef } = useAppContext()
    useHandleLimits({type: 'publication', windowHeight: containerRef?.current?.clientHeight, setPaginate, resourcesWidth:containerRef?.current?.clientWidth, containerHeight: 150})

    const search = async (id:string) => {
        const res:any = await searchPublications({volumeId:id, q:query.length > 2 ? query : '' ,  page:pagination.currentPage, limit:pagination.limit, offset:pagination.offset})
        setpublications(res.hits)
        setTotalHits(res.found)
    

    }
    useEffect(() => {
        (async () => {
            if(volume){
                await search(volume.id)

            }

        })()
    }, [ pagination.currentPage, pagination.limit, pagination.offset, volume?.id, query]);

    const handlePublicationSelection = (publication: Publication) =>{
          navigate(`./${publication.id}`, {state: {item:publication, url: publication.website}})
        }
  return (
    <div>
        
            <div className='overflow-auto pl-6' style={renderVolumenDetailsPublicationsHeightStyle(containerRef?.current?.clientHeight)}>
                <Collapse defaultActiveKey={['publications']}>
                    <>
                    
            
                        <Panel key={'publications'} header={<p className='text-groupe'>{totalHits} publications</p>}>
                            <div className="pl-[19px]">
                                {publications && publications.length>0 ? <>
                                    <Publications setRecheckPin={() => {}} publications={publications} handlePublicationSelection={handlePublicationSelection} /> 
                            
                                </> : <p className='pl-2.5'>No publication </p>}
                                
                            </div>
                        </Panel>
                    
                    </>
                </Collapse>

            </div>
            <div className='border-t border-main bar-h flex items-center'>
                <PaginationComponent pagination={pagination} setPaginate={setPaginate} totalHits={totalHits} disabled={false} hidePanel={false}/>

            </div>

    </div>
  )
}
