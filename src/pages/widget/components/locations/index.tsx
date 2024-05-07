import React, { useState } from 'react'
import LocationsWindow from './Window';

export default function Locations({handleSelectLocation, selectedLocation} : {handleSelectLocation : (data: {name:string, path:string, network:{coll:string , id:string}}) => void, selectedLocation?:string}) {
    const [visible, setvisible] = useState(false);
  return ( 
    <div className='w-max input-h'>
        <button className='px-4 flex items-center truncate h-full border-r border-main bg-white' onClick={() => setvisible(true)}>{selectedLocation ? selectedLocation : 'Select volume'}</button>
        <LocationsWindow
            visible={visible}
            setvisible={setvisible}
            handleSelectLocation={handleSelectLocation}
        />
    </div>
  )
}
