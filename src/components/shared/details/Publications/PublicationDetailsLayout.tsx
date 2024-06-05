import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'


import DetailsLayout from '../layout'


export default function PublicationDetailsLayout() {
    const location = useLocation()
  

   
  return (
    <DetailsLayout loading={false} prevPath={location.pathname.includes('all') ? '..': '../..'}>

   
        
           <Outlet/>
      

    
      
    </DetailsLayout>


  )
}
