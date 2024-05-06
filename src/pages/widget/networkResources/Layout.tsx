import React, { useEffect } from 'react'
import { useAppContext } from '../../../context/appContext'
import { Outlet } from 'react-router';

export default function NetworkContainerLayout() {
    const { setcurrentTab } = useAppContext()

    useEffect(() => {
        
       setcurrentTab('network')
    }, []);
  return (
    <div className="flex">
        <Outlet/>
    </div>
  )
}
