import React, { useEffect, useState } from 'react'
import Icon from '../../../../components/icons/Icon'
import Tile from './Tile'
import { useAppContext } from '../../../../context/appContext'
import Divider from '../../../../components/shared/Divider'
import { Dropdown, Input } from 'antd'
import logo from '../../../../../public/logo.png'
import Volumes from './Volumes'
import ReactSvg from '../../../../components/shared/ReactSvg'
export default function Dock({handleNetworkNavigation, handleGridNavigation, path, foldersId} : {handleNetworkNavigation:() => void, handleGridNavigation: () => void, path?:string, foldersId?:string}) {
    const { datacenter, volume, server} = useAppContext()
    const [isVisible, setisVisible] = useState(false);
    const [placeholder, setplaceholder] = useState<any>(true);
    const [volumeDdOpen, setvolumeDdOpen] = useState(false);


    useEffect(() => {
       if((datacenter || volume) && !!path){
        setisVisible(true)
       }else{
        setisVisible(false)
       }
    }, [datacenter, volume, path, server]);

  return (
    <div className={`w-[40vw] min-w-max bg-main-window teddra-shadow-main  flex flex-col text-skin-inverted fill-skin-inverted h-full transition-all relative ${!isVisible ? 'bottom-[-100px]' : 'bottom-0'}`}>
         
     
        <div className='flex justify-center h-full font-light' style={{borderColor:'rgb(255 255 255 / 9%)'}}>
               
            <div className="flex justify-center space-x-3 px-4  items-center py-1.5">
                <button className='rounded-full p-1' onClick={handleGridNavigation}>
                    <Icon name='TeddraLogo' className='w-[26px] h-[26px]'/>
                </button>
                <Divider/>
                <button className='p-1.5 rounded bg-hover-transparent' onClick={handleNetworkNavigation}>
                    <ReactSvg src={datacenter?.iconUrl!} className='icon-sm'/>
                </button>
                <Input type="text" className='h-[35px] border input-bg rounded px-2 text-white placeholder:text-white focus:border-hover w-[200px]' onFocus={() => setplaceholder(false)} onMouseLeave={() => setplaceholder(true)} placeholder={placeholder ? `Search` : ''}/>
                {foldersId && <Dropdown visible={volumeDdOpen} trigger={['click']} placement='top' overlay={<Volumes id={foldersId} onClose={() => setvolumeDdOpen(false)}/>}>
                    <button className={`p-1.5 rounded ${volumeDdOpen ? 'bg-white text-skin-base border border-transparent': 'bg-hover-transparent'}`} onClick={() => setvolumeDdOpen(true)}>
                        <Icon className='icon-sm' name='Folders'/>
                    </button>

                </Dropdown>}
                <Divider/>
                <button className='p-1.5 rounded bg-hover-transparent'>
                    <Icon className='icon-sm' name='Calendar'/>
                </button>
                <button className='p-1.5 rounded bg-hover-transparent'>
                    <Icon className='icon-sm' name='Newspapers'/>
                </button>
                <button className='p-1.5 rounded bg-hover-transparent'>
                    <Icon className='icon-sm' name='Jobs'/>
                </button>
                <button className='p-1.5 rounded bg-hover-transparent'>
                    <Icon className='icon-sm' name='Immo'/>
                </button>
                <Divider/>
                <button className='p-1.5 rounded bg-hover-transparent'>
                    <Icon className='icon-sm' name='Help'/>
                </button>
                {/* <Tile
                    title={volume ? volume.title : datacenter?.title!}
                    handleNavigation={handleNetworkNavigation}
                    icon={{type: 'image', src: volume ? volume.iconUrl : datacenter?.iconUrl!}}
                    description='Find a Volume: a Folder, Directory,..'
                
                />
            
                <Tile
                    title={'Search grid'}
                    handleNavigation={handleGridNavigation}
                    icon={{src:'Globe', type:'icon'}}
                    description='Find a Volume: a Folder, Directory,..'
                /> */}
            </div>

        </div>
    </div>
  )
}
