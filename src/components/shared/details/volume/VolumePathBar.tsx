


import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { PathProps } from '../../../../types';
import { Breadcrumb } from '../../breadcrumb';




export default function VolumePathBar(props: PathProps) {
  const navigate = useNavigate() 
  return (
    <div className=''>

      <div className="bg-topbar flex space-x-3 w-full">
       
          <div className=" space-x-2 bar-h menubar items-center pl-[15px] pr-2 flex">
                 <button className='p-1.5 bg-hover-transparent rounded no-dragable disabled:fill-skin-muted' onClick={() => navigate(-1)} disabled={!(window as any).navigation?.canGoBack}>
                    <ArrowLeftIcon className='icon-sm'/>
                 </button>
              
                  <div className="">
                    {props.Breadcrumb && (
                        <Breadcrumb
                          className=''
                          {...props.Breadcrumb}
                        
                        />

                    )}

                  </div>
                
           
        
          
            
            </div>

        </div>
    </div>
  )
}
