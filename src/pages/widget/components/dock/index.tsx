import React, { useEffect, useState } from 'react'
import Icon from '../../../../components/icons/Icon'
import Tile from './Tile'
import { useAppContext } from '../../../../context/appContext'

export default function Dock({handleNetworkNavigation, handleGridNavigation, path} : {handleNetworkNavigation:() => void, handleGridNavigation: () => void, path?:string}) {
    const { datacenter, volume} = useAppContext()
    const [isVisible, setisVisible] = useState(false);

    useEffect(() => {
       if((datacenter || volume) && !!path){
        setisVisible(true)
       }else{
        setisVisible(false)
       }
    }, [datacenter, volume, path]);
  return (
    <div className={`bg-main-window teddra-shadow-main teddra-rounded flex flex-col text-skin-inverted fill-skin-inverted h-full transition-all relative ${!isVisible ? 'bottom-[-100px]' : 'bottom-0'}`}>
         
      <div className="bg-bars flex justify-between py-1" >
        <div className={`flex space-x-2 ` }>
            <div className='flex space-x-[2px] ml-[21px] '>
      
                  <div className={`text-white fill-white flex items-center  rounded-t no-dragable px-3 space-x-2.5 group`}>
          
                    <div className={`flex items-center h-full  space-x-3 `}>
                        <div className={`relative icon-md`}>
                          <Icon name={'TeddraLogo'} className='w-full h-full' /> 

                        </div>      
                        <p className={`  `}>Teddra</p>
                    </div>
                  
                  </div>

        

            </div>
        
         

       

        </div>
       

        </div>
        <div className='flex  h-full  border-t font-light' style={{borderColor:'rgb(255 255 255 / 9%)'}}>
               
                <div>
                    <div className="flex  px-5 py-1">
                        <div>
                            <div className="flex space-x-3">
                                <Tile
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
                                />
                            </div>
                            
                            <div className=' '>
                                {/* {showBar.show && (
                                    <div className={`flex ${showBar.show ? 'h-[25px]' : 'h-0 opacity-0'} transition-all  items-center `}>
                                        {showBar.title ? (
                                            <p className='text-[11px] italic'>{`${showBar.title} :`}<span className=' opacity-[0.5]'> {showBar.text}</span></p>

                                        ) : (
                                            <p className='text-[11px] italic opacity-[0.5]'>hover an item</p>
                                        )}
                                    </div>

                                )} */}

                            </div>
                        </div>
                      
                      

                    </div>
                  
                 
                </div>
                   

        </div>
    </div>
  )
}
