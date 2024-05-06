import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ObjectMode from '../modes/Object'
import { Spin } from 'antd'
import { Publication } from '../../../../types'
import { getPublication } from '../../../../utils/search'
import { storageUrl } from '../../../../constants/apiRequests'
import { renderHeightStyle } from '../../../../utils/utils'
import { useAppContext } from '../../../../context/appContext'
import Icon from '../../../icons/Icon'


export default function PublicationDetails() {
    const location = useLocation()
    const [item, setitem ] = useState<null | Publication>(null)
    const params = useParams()
    const [loading, setloading] = useState(false)
    const { containerRef } = useAppContext()
    
    useEffect(() => {
      if(location.state){
        setitem(location.state.item)

      }else{
        if(params.publicationId){
          setloading(true)
          getPublication({id:params.publicationId}).then((res:any) => {
            setitem(res)
            setloading(false)
          })

        }
      }
    },[location.state, params.publicationId])
  return (
    <div className='h-full w-full'>
      <Spin spinning={loading}>
       
          <div className={` overflow-auto `} style={renderHeightStyle(containerRef?.current?.clientHeight)}>
            {item && (
              <ObjectMode 
                thumb={item.thumbnail ? {
                    type:'slide',
                    images: item.media ? [{src: item.thumbnail, type:'image'},...item.media] : [{src: item.thumbnail, type:'image'}]
                }: {
                  type: 'icon',
                  icon:{type:'image', src:`${storageUrl}${item.publicationType.iconUrl}`}
                }}

                fields={
                  [
                    {
                      name: 'Webpage',
                      value: <a href={item.url} className='!text-inherit' target='_blank'><Icon name='OpenWindow' className='icon-sm'/></a>
                    },
                    {
                      name:'Title',
                      value: item.title[item.local]!,
                    },
                    {
                      name:'Type',
                      value: item.publicationType.title.en!,
                      center:true
                    },
                    ...item.description?.[item.local] ? [
                      {
                        name: 'Description',
                        value:<p dangerouslySetInnerHTML={{__html: item.description[item.local]!}} style={{lineHeight:'1.6'}}></p>

                      }
                    ]:[],
                    ...item.keywords?.[item.local]?.length > 0 ? [
                      {
                        name: 'Keywords',
                        value:<div className="flex-1 flex flex-wrap gap-1">
                        {item.keywords[item.local].map((keyword : string) => <p key={keyword} className='px-3 py-1.5 rounded-full border border-main text-verysmall'>{keyword}</p>) }
                        </div>

                      }
                    ]:[]
                  ]
                }
              />

            )}

          </div>
     

      </Spin>
    
    
    </div>
  )
}
