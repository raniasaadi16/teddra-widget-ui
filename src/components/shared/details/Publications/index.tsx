
import ObjectMode from '../modes/Object'

import { storageUrl } from '../../../../constants/apiRequests'

import Icon from '../../../icons/Icon'

import { useEffect, useState } from 'react'
import { Publication } from '../../../../types'
import { useLocation, useParams } from 'react-router'
import { getPublication } from '../../../../utils/search'
import { Spin } from 'antd'
import DetailsLayout from '../layout'


export default function PublicationDetails() {


    const location = useLocation()
    const params= useParams()
    const [loading, setloading] = useState(false);
    const [publication, setPublication] = useState<Publication | null>(null);

    useEffect(() => {
        if(location.state){
          setPublication(location.state.item)
  
        }else{
          if(params.publicationId){
            setloading(true)
            getPublication({id:params.publicationId}).then((res:any) => {
              setPublication(res)
              setloading(false)
            })
  
          }
        }
  
      },[location.state, params.publicationId])
    
  return (

   
    <DetailsLayout loading={false} >
            <Spin spinning={loading}>
              {publication && (
                <ObjectMode 
                  thumb={publication.thumbnail ? {
                      type:'slide',
                      images: publication.media ? [{src: publication.thumbnail, type:'image'},...publication.media] : [{src: publication.thumbnail, type:'image'}]
                  }: {
                    type: 'icon',
                    icon:{type:'image', src:`${storageUrl}${publication.publicationType.iconUrl}`}
                  }}

                  fields={
                    [
                      {
                        name: 'Webpage',
                        value: <a href={publication.url} className='!text-inherit' target='_blank'><Icon name='OpenWindow' className='icon-sm'/></a>
                      },
                      {
                        name:'Title',
                        value: publication.title[publication.local]!,
                      },
                      {
                        name:'Type',
                        value: publication.publicationType.title.en!,
                        center:true
                      },
                      ...publication.description?.[publication.local] ? [
                        {
                          name: 'Description',
                          value:<p dangerouslySetInnerHTML={{__html: publication.description[publication.local]!}} style={{lineHeight:'1.6'}}></p>

                        }
                      ]:[],
                      ...publication.keywords?.[publication.local]?.length > 0 ? [
                        {
                          name: 'Keywords',
                          value:<div className="flex-1 flex flex-wrap gap-1">
                          {publication.keywords[publication.local].map((keyword : string) => <p key={keyword} className='px-3 py-1.5 rounded-full border border-main text-verysmall'>{keyword}</p>) }
                          </div>

                        }
                      ]:[]
                    ]
                  }
                />

              )}

            </Spin>

    </DetailsLayout>
      

    
      


  )
}
