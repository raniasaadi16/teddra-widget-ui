import Icon from '../components/icons/Icon'
import { Outlet, useNavigate } from 'react-router'


export default function Layout() {
    const navigate = useNavigate()

    return (
        <div className='w-screen h-screen flex justify-start items-end p-4'>
            <button className='bg-skin-fill-inverted fill-skin-inverted text-skin-inverted rounded px-4 py-2 flex space-x-2.5 items-center' onClick={() => navigate('/widget/fb17c269-1ed1-4cb0-92e6-04d9b712560b/a492dba8-27fc-4f66-a284-1bb08c424b2f')}>
                <Icon className='icon-sm' name='TeddraLogo'/>
                <p>Teddra widget</p>
            </button>
            <Outlet/>
         

        </div>

  )
}
