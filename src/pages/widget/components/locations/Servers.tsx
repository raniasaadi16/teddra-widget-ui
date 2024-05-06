import React, { useEffect, useState } from 'react'
import { VolumeSearch } from '../../../../types';
import { searchVolumes } from '../../../../utils/search';
import ObjectWithDropdown from '../../../../components/shared/object/objectWithIcon/Withdrpdown';
import ResourceMenu from '../../../../components/shared/menu/ResourceMenu';
import ReactSvg from '../../../../components/shared/ReactSvg';
import { storageUrl } from '../../../../constants/apiRequests';

export default function Servers({handleSelect, selectedThematic} : {handleSelect : (volume:VolumeSearch) => void, selectedThematic:string}) {
    const [query, setquery] = useState('');
    const [volumes, setvolumes] = useState<{document:VolumeSearch}[]>([])

    useEffect(() => {
        
        searchVolumes({parentId: selectedThematic, filter:'(cfs_type:localServers || cfs_type:specDrives) && private:false', q:query}).then((data:any) => setvolumes(data.hits))
    }, [query]);
  return (
    <div>
        <input type="text" placeholder='Search' className='border border-main rounded w-[200px] pl-2' value={query} onChange={e => setquery(e.target.value)} />
        <div className="pt-2 flex flex-wrap gap-3">
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
                        onSelect={() => handleSelect(volume.document)}
                    />
                    ))}
            
                </>
            ) : <p className='pl-2.5'>No volume</p>}

        </div>
    </div>
  )
}
