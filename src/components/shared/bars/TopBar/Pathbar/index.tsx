


import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { useLocation, useNavigate } from 'react-router-dom';
import { PathProps } from '../../../../../types';
import { Breadcrumb } from '../../../breadcrumb';
import { Search } from '../../../input/Search';
import TypesDropdown from '../Filter/types';



export default function PathBar(props: PathProps) {
  const navigate = useNavigate() 
  return (
    <div className=''>

      <div className="bg-topbar flex space-x-3">
       
          <div className="flex flex-1 space-x-2 bar-h menubar items-center pl-[29px] pr-2">
                 <button className='p-1.5 bg-hover-transparent rounded no-dragable disabled:fill-skin-muted' onClick={() => navigate(-1)} disabled={!(window as any).navigation?.canGoBack}>
                    <ArrowLeftIcon className='icon-sm'/>
                 </button>
                 <button className='p-1.5 bg-hover-transparent rounded no-dragable disabled:fill-skin-muted' disabled={!(window as any).navigation?.canGoForward} onClick={() => navigate(1)}>
                    <ArrowRightIcon className='icon-sm'/>
                 </button>
                  <div className="flex-1">
                    {props.Breadcrumb && (
                        <Breadcrumb
                          className='flex-1'
                          {...props.Breadcrumb}
                        
                        />

                    )}

                  </div>
                
                
                {props.extra && (
                  <div className="rounded  mx-2">
                    {props.extra}
                  </div>

                )}
                
                <TypesDropdown/>
              {props.search && (
                <div className="no-dragable">
                  <Search
                    placeholder='Search'
                    {...props.search}
                    className='bg-white rounded min-w-[250px] border border-main'
                  />

                </div>

               )} 
          
            
            </div>

        </div>
    </div>
  )
}
