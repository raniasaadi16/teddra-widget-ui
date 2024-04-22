import { useLocation, useNavigate } from 'react-router-dom'


export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const handleNavigation = (page: string) => {
      navigate(`/widget${page}`, {state: location.state})
    }
    const isActive = (page:string) => {
      return location?.pathname?.split('/')?.includes(page)
    }
    return (
      <div className="border-b border-main bg-white">
        <div className='bar-h flex items-center space-x-9 pl-[43px]'>
            <button className={`${location.pathname === '/widget' && 'active-mode'} disabled:text-skin-muted`} onClick={() => handleNavigation('')}>Volume name</button>
            <button className={`${isActive('signup') && 'active-mode'} disabled:text-skin-muted`} onClick={() => handleNavigation('/network')}>Network name</button>
            <button className={`${isActive('forget-password') && 'active-mode'} disabled:text-skin-muted`} onClick={() => handleNavigation('/forget-password')}>Teddra Grid</button>



        </div>

      </div>

  )
}
