

import { TitleProps } from '../../../../../types'
import { Close } from '../../../../icons'
import Icon from '../../../../icons/Icon'
import ReactSvg from '../../../ReactSvg'


export default function TitleBar(props: TitleProps) {
  
  return (
    <div className='menubar'>

      <div className="bg-bars flex justify-between " >
        <div className={`flex space-x-2 ` }>
            <div className='flex space-x-[2px] ml-[21px] '>
      
                  <div className={`flex items-center  rounded-t no-dragable px-3 space-x-2.5 group`}>
          
                    <div className={`flex items-center h-full  space-x-3 `}>
                        <div className={`relative icon-md`}>
                          {props.topbarTitle.icon.type === 'icon' ? (
                            <Icon name={props.topbarTitle.icon.src} className='w-full h-full'/>
                          ) : (
                            <ReactSvg src={props.topbarTitle.icon.src} className='w-full h-full' /> 

                          )}

                        </div>      
                        <p className={` font-bold `}>{props.topbarTitle.title}</p>
                    </div>
                  
                  </div>

        

            </div>
        
         

       

        </div>
          <div className="flex space-x-3 bar-h menubar items-center px-1.5  ">
              
       
             
                  <button className='cursor-pointer no-dragable hover:bg-teddra-red hover:text-white hover:fill-white w-[24px] h-[24px] border-transparent flex justify-center items-center rounded' onClick={props.close}>
                    <Close className='icon-sm ' />
                  </button>
            </div>

        </div>
    </div>
  )
}
