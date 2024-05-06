import React, { useEffect } from 'react'
import { useAppContext } from '../../../context/appContext'
import { Outlet } from 'react-router';

export default function GridContainerLayout() {
    const { setcurrentTab } = useAppContext()

    useEffect(() => {
        
       setcurrentTab('grid')
    }, []);
  return (
    <div className="flex">
        <Outlet/>
    </div>
  )
}
