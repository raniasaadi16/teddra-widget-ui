import React from 'react'
import WithDivider from '../../WithDivider'

export default function ResourcesTopBar({isPublication}:{isPublication?:boolean}) {
  return (
    <div className=" bg-bars">
      <div className="bar-h-mini grid grid-cols-6 pr-[20px] justify-between items-center ">
          <div className='col-span-3 h-full items-center'>
          
              <WithDivider>
                  <>Resources</>
              </WithDivider>

          </div>
          {isPublication && (
            <>
              <WithDivider className='ml-[-5px]'>
                  <>Type</>
              </WithDivider>
              <WithDivider className='ml-[-8px]'>
                  <>Author</>
              </WithDivider>
              <WithDivider className='ml-[-12px]'>
                  <>Date</>
              </WithDivider>
            
            </>
          )}


      
      </div>

    </div>
  )
}
