import React from 'react'
import { ReactSVG } from 'react-svg'
import { Highlight, Publication } from '../../../../types'
import OneLine from '../../object/oneLine'
import ResourceMenu from '../../menu/ResourceMenu'
import { storageUrl } from '../../../../constants/apiRequests'

type Props = {
    item: {document:Publication, highlight:Highlight} ,
    active:boolean,
    renderDate :(date:number) => string,
    handlePublicationSelection: (item:Publication) => void,
}
export default function OneLineItem({item, active, renderDate, handlePublicationSelection} : Props) {
   
  return (
    <OneLine
    key={item.document?.id}
    active={active}
    dropdownProps={{
      overlay:<ResourceMenu
        items={{shortcut:true}}
       
      />
    }}
   >
 
   
   
 <div className={`grid grid-cols-6 gap-x-3  justify-between cursor-pointer w-full`} key={item.document?.id} onClick={() => handlePublicationSelection(item.document)}>
  <div className='flex space-x-2 col-span-3 items-center bg-transparent relative' draggable onDragStart={e => e.dataTransfer.setData('item', JSON.stringify({title:item.document?.title[item.document?.local],icon: {src:`${storageUrl}${item.document?.publicationType?.iconUrl}`, type: 'image'},id: item.document.id, docType:'publication'}))}>
      <div className='relative icon-sm'>
          <ReactSVG src={`${storageUrl}${item.document?.publicationType?.iconUrl}`} className='w-full h-full'/>
      </div>
      {item.highlight?.title?.[item.document?.local] ? <p className='truncate max-w-full flex-1 text-start' dangerouslySetInnerHTML={{__html: item.highlight?.title?.[item.document?.local]?.snippet!}}></p> : (
        <p className='truncate max-w-full flex-1 text-start'>{item.document?.title[item.document?.local]}</p>

      )} 
       
  </div>
  <span className='truncate text-start'>{item.document?.publicationType.title.en}</span>
  
    <span className='truncate text-start'>{item.document?.organization?.name}</span>
 
    <span className='truncate text-start'>{renderDate(item.document?.created_at)}</span>


</div> 
   </OneLine>
  )
}
