import React, { useEffect } from 'react'
import { useAppContext } from '../../../context/appContext'
import { Outlet } from 'react-router';

export default function ResourcesContainerLayout() {
    const { setcurrentTab } = useAppContext()

    useEffect(() => {
        
       setcurrentTab('main')
    }, []);
  return (
    <div className="flex">
        <Outlet/>
    </div>
  )
}
