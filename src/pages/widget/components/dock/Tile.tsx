import { ReactSVG } from 'react-svg'
import Icon from '../../../../components/icons/Icon'
import { iconType } from '../../../../types'

type Props = {
    title:string,
    handleNavigation:() => void,
    disabled?:boolean,
    icon:iconType,
    description:string
}
export default function Tile({title, handleNavigation, disabled,icon, description}: Props) {
  return (
    

      <div>

        <button className={` flex px-2 py-0.5  items-center justify-center text-start space-x-2 rounded bg-hover-transparent relative group  disabled:opacity-[0.2]`}
            onClick={handleNavigation}
            disabled={disabled}

    >
            {icon.type === 'icon' ? <Icon name={icon.src} className='w-[35px] h-[35px] mx-auto'/> : <ReactSVG src={icon.src} className='w-[35px] h-[35px] mx-auto' />}
            <div className=" flex-1">
                <p className="truncate">{title}</p>
                
                

            </div>
            
            


    </button>
      </div>

  )
}
