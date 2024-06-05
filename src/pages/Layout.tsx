import { useEffect, useState } from 'react';
import Icon from '../components/icons/Icon'
import { Outlet, useLocation, useNavigate } from 'react-router'
import Locations from './widget/components/locations';
import Dock from './widget/components/dock';
import { useAppContext } from '../context/appContext';
import { getVolum } from '../utils/requests';
import { Spin } from 'antd';
import { createSearchParams, useSearchParams } from 'react-router-dom';


export default function Layout() {
    const navigate = useNavigate()
    const [ifram, setifram] = useState('');
    const [value, setvalue] = useState('');
    const { setDatacenter, setVolume, setSelectedLocation, selectedLocation } = useAppContext()
    const [loading, setloading] = useState(false);
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()

    const handleSelectLocation = (loc: {name:string, path:string, network:{coll:string , id:string}}) => {
        setSelectedLocation(loc)
        setloading(true)
        fetch(getVolum({id:loc.network.id, coll:loc.network.coll})).then(res => res.json()).then(data => {
            if(loc.network.coll === 'datacenters'){
                setDatacenter(data.data)
                setVolume(null)
            }else{
                setVolume(data.data)
            }
        }).finally(() => setloading(false))
    }
    const handleNetworkNavigation  = () => {
        navigate(`/widget/main${selectedLocation?.path}`)
    }
    const handleGridNavigation = () => {
        navigate('/widget/grid')
    }
    useEffect(() => {
        const url = searchParams.get('url')
        if(url){

            setifram(url)
            setvalue(url)
        }
    }, [location.search]);
    return (
        <div className='w-screen h-screen relative'>
            <iframe src={ifram} className='w-full h-full'></iframe>
            <div className='absolute w-full bottom-0 left-0 flex justify-between items-end p-4'>
                
                {/* <button disabled={!selectedLocation} className='bg-skin-fill-inverted fill-skin-inverted text-skin-inverted rounded px-4 py-2 flex space-x-2.5 items-center disabled:opacity-20' onClick={() => navigate(`/widget/main${selectedLocation?.path}`)}>
                    <Icon className='icon-sm' name='TeddraLogo'/>
                    <p>Teddra -</p>
                </button> */}
                <Dock handleNetworkNavigation={handleNetworkNavigation} handleGridNavigation={handleGridNavigation} path={selectedLocation?.path} />
                <div className='flex rounded border border-main'>
                    <Locations handleSelectLocation={handleSelectLocation} selectedLocation={selectedLocation?.name}/>

                    <input type="text" className='min-w-[300px] max-w-[400px] w-full border-none pl-2' placeholder='website' value={value} onChange={e => setvalue(e.target.value)} />
                    <button className='bg-skin-fill-inverted text-skin-inverted rounded-r px-4 disabled:opacity-20' disabled={!selectedLocation} onClick={() => {
                        setSearchParams({url: value})
                    }}>Ok</button>
                </div>
            
                <Outlet/>
            

            </div>

        </div>

  )
}