import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../../../context/appContext'


export default function Header() {
    const navigate = useNavigate()
    const { server, currentTab } = useAppContext()
    const params = useParams()
    const handleNavigation = (page: string) => {
      // navigate(`/widget${page}`, {state: location.state})
      navigate(`/widget${page}/${params.datacenterId}/${params.serverId}${params.type ? `/${params.type}` : ''}${params.volume ? `/${params.volume}` : ''}`)
    }
    const isActive = (page:string) => {
      return currentTab === page
    }
    return (
      <div className="border-b border-main bg-white">
        <div className='bar-h flex items-center space-x-9 pl-[43px]'>
            <button className={`${isActive('main') && 'active-mode'} disabled:text-skin-muted`} onClick={() => handleNavigation(`/main`)}>{server?.title}</button>
            <button className={`${isActive('network') && 'active-mode'} disabled:text-skin-muted`} onClick={() => handleNavigation(`/network`)}>All engines</button>
            <button className={`${isActive('grid') && 'active-mode'} disabled:text-skin-muted`} onClick={() => handleNavigation('/grid')}>Search Grid</button>



        </div>

      </div>

  )
}
