import React, { useRef, useState } from 'react'
import CardWithWebsiteLayout from '../WithWebsite/Layout'
import Description from '../WithWebsite/Description'
import Icon from '../../../icons/Icon'
import { useAppContext } from '../../../../context/appContext'
import { Dropdown } from 'antd'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router'

type PartnerType = {
  owner: any,
  imgHeight?:string,
  active?:boolean,
  volume:{id:string,title:string, icon:string, breadcrumb:string, private:boolean, coll:string}

}
export default function OwnerWithWebsite({ owner, imgHeight,active,volume } : PartnerType) {

 const { containerRef } = useAppContext()
 const [visible, setvisible] = useState(false);
 const navigate = useNavigate()
 const handleNavigation = () => {
  window.open(`/widget/partner/${volume.coll}/${volume.id}/?url=${owner.website}`,'_blank')
}
  return (
    <div className='' >
      <CardWithWebsiteLayout
        item={{
          title: <p className={`${!active ? '!text-main-base' : 'text-white' }`}>{owner.name}</p>,
          website: <img src={owner.logo} className='w-full h-full' alt="" />
        }}
      
        imgClassName={`h-[190px] w-full ${imgHeight && imgHeight}`}
        border
        active={active}
      />
      <div className="py-3 pt-5">
        <Description
            title={owner.name}
            description={owner.description}
            type=''
            links={<div>
              <Dropdown
              trigger={['click']} 
              onVisibleChange={(v) => setvisible(v)}
              overlay={
                <div className='rounded bg-white p-1.5 teddra-shadow ml-5 w-[200px] '>
                  <a className='flex space-x-3 items-center px-4 py-2 bg-hover-transparent rounded !text-inherit hover:text-inherit' href={owner.website} target='_blank'>
                      <Icon className='icon-sm' name='OpenWindow'/>
                      <p>To website</p>
                  </a>
                  <button className='flex space-x-3 items-center px-4 py-2 bg-hover-transparent rounded !text-inherit hover:text-inherit w-full' onClick={() => navigate('./publications')}>
                      <Icon className='icon-sm' name='OpenWindow'/>
                      <p>To publications</p>
                  </button>
                  <button className='flex space-x-3 items-center w-full px-4 py-2 bg-hover-transparent rounded !text-inherit hover:text-inherit' onClick={handleNavigation} >
                      <Icon className='icon-sm' name='OpenWindow'/>
                      <p className='truncate flex'>To widget</p>
                  </button>
                </div>
              } 
              getPopupContainer={() => containerRef?.current}
              >
                <button className={`border border-main rounded px-4 py-2 ${visible ? 'bg-skin-fill-inverted text-skin-inverted' : ' bg-hover-transparent'}`}>
                    <div className="flex space-x-5 items-center">
                      <div className="flex items-center space-x-3">
                        <Icon className='icon-sm' name='OpenWindow'/>
                        <p>Acceder</p>
                      </div>
                      <ChevronDownIcon className='icon-mini'/>
                    </div>

                </button>
              </Dropdown>
            </div>}
            // links={<button onClick={handleNavigation}><Icon name='OpenWindow' className='icon-sm'/></button>}

          />


      </div>
    
    </div>
  )
}
