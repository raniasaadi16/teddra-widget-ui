


import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { PathProps } from '../../../../../types';
import { Breadcrumb } from '../../../breadcrumb';
import { Search } from '../../../input/Search';
import TypesDropdown from '../Filter/types';



export default function PathBar(props: PathProps) {
  const navigate = useNavigate() 
  return (
    <div className=''>

      <div className="bg-topbar flex space-x-3 w-full">
       
          <div className=" space-x-2 bar-h menubar items-center pl-[29px] pr-2 flex">
                 <button className='p-1.5 bg-hover-transparent rounded no-dragable disabled:fill-skin-muted' onClick={() => navigate(-1)} disabled={!(window as any).navigation?.canGoBack}>
                    <ArrowLeftIcon className='icon-sm'/>
                 </button>
                 <button className='p-1.5 bg-hover-transparent rounded no-dragable disabled:fill-skin-muted' disabled={!(window as any).navigation?.canGoForward} onClick={() => navigate(1)}>
                    <ArrowRightIcon className='icon-sm'/>
                 </button>
                
                
                
                {props.extra && (
                  <div className="rounded  mx-2">
                    {props.extra}
                  </div>

                )}
                  {props.search && props.search}
             
                <TypesDropdown/>
        
          
            
            </div>

        </div>
    </div>
  )
}
