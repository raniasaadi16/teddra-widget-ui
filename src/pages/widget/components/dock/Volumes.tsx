import React, { useEffect, useState } from 'react'
import { searchVolumes } from '../../../../utils/search';
import { VolumeSearch } from '../../../../types';
import { Close } from '../../../../components/icons';
import ObjectWithDropdown from '../../../../components/shared/object/objectWithIcon/Withdrpdown';
import ResourceMenu from '../../../../components/shared/menu/ResourceMenu';
import ReactSvg from '../../../../components/shared/ReactSvg';
import { storageUrl } from '../../../../constants/apiRequests';

export default function Volumes({id, onClose}: {id:string, onClose:() => void}) {
    const [sponsoredVolumes, setsponsoredVolumes] = useState<{document:VolumeSearch}[]>([]);
    

    useEffect(() => {
        (async () =>  {
        
         const res:any = await searchVolumes({parentId:id, q:'*',  page:1, limit:10, offset:0, filter:'cfs_type:=privateDirectories'})
         setsponsoredVolumes(res.hits)
 
        })()
     }, [id]);
  return (
    <div className='p-2 rounded bg-white teddra-shadow -top-1 relative w-max'>
      <div className='flex justify-between items-center pl-3'>
        <p>Sponsered Volumes</p>
        <button className='p-1 hover:bg-red-500 hover:text-white rounded' onClick={onClose}>
          <Close className='icon-mini'/>
        </button>
        </div>
        <div className='pt-2 max-h-[300px] overflow-auto'>
            {sponsoredVolumes.map(childVolume => (
              <ObjectWithDropdown
              title={childVolume.document.title.en}
              overlay={<ResourceMenu
                  items={{shortcut:true}}
          
              />}
              icon={<div className='relative w-full h-full '>
                  <ReactSvg src={`${storageUrl}${childVolume.document.iconUrl}`} className='w-full h-full'

                  />
              
                  
              </div>}
              key={childVolume.document.id}
              id={childVolume.document.id!}
              description={<p className='truncate'>{childVolume.document.breadcrumbs?.[0]?.en!}</p>
                  
              
                  
              }
              onSelect={() => {}}
              // active={childVolume.document.id === params.volumeId}
              // onSelect={() =>{
              //     if(volume?.organizationId && (childVolume.document.organizationId === volume?.organizationId)){
              //         goTo(`/volumes/${childVolume.document.id}/publications`, {state: childVolume.document})
              //     }else{
              //         goTo(`/all/volumes/${childVolume.document.id}`, {state: childVolume.document})

              //     }
              // }}
          />
          ))}

        </div>
      
    </div>
  )
}
