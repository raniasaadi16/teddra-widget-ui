import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'


import DetailsLayout from '../layout'


export default function PublicationDetailsLayout() {
  

   
  return (
    <DetailsLayout loading={false} >

   
        
           <Outlet/>
      

    
      
    </DetailsLayout>


  )
}
