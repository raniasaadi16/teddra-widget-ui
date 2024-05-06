import { useState } from 'react';
import Icon from '../components/icons/Icon'
import { Outlet, useNavigate } from 'react-router'
import Locations from './widget/components/locations';


export default function Layout() {
    const navigate = useNavigate()
    const [selectedLocation, setselectedLocation] = useState<{name:string, path:string} | null>(null);
    const [ifram, setifram] = useState('');
    const [value, setvalue] = useState('');

    const handleSelectLocation = (data: {name:string, path:string}) => {
        setselectedLocation(data)
    }

    return (
        <div className='w-screen h-screen relative'>
            <iframe src={ifram} className='w-full h-full'></iframe>
            <div className='absolute w-full bottom-0 left-0 flex justify-between items-end p-4'>
                
                <button disabled={!selectedLocation} className='bg-skin-fill-inverted fill-skin-inverted text-skin-inverted rounded px-4 py-2 flex space-x-2.5 items-center disabled:opacity-20' onClick={() => navigate(`/widget/main${selectedLocation?.path}`)}>
                    <Icon className='icon-sm' name='TeddraLogo'/>
                    <p>Teddra widget</p>
                </button>
                <div className='flex rounded border border-main'>
                    <Locations handleSelectLocation={handleSelectLocation} selectedLocation={selectedLocation?.name}/>
                    <input type="text" className='min-w-[300px] max-w-[400px] w-full border-none pl-2' placeholder='website' value={value} onChange={e => setvalue(e.target.value)} />
                    <button className='bg-skin-fill-inverted text-skin-inverted rounded-r px-4' onClick={() => {
                        setifram(value)
                    }}>Ok</button>
                </div>
            
                <Outlet/>
            

            </div>

        </div>

  )
}
