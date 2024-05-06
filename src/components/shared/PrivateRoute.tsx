import { getAuth, onAuthStateChanged } from '@firebase/auth'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, OutletProps, useLocation } from 'react-router-dom'
import { auth } from '../../utils/firebase'


export default function PrivateRoute(props:OutletProps) {
    const [isLoaded, setisLoaded] = useState(false)
    const [user, setuser] = useState<null | {role?:string, id:string}>(null);
    useEffect(() => {
      console.log('hi')
      const listen = onAuthStateChanged(auth, async user => {
        const claims = await user?.getIdTokenResult()
        if(user){
            if((claims?.claims.role === 'super_admin' || claims?.claims.role === 'admin')){
              setuser({id:user.uid,role:claims?.claims.role})
            }else{
                setuser({id:user.uid})
            }

        }else{
            setuser(null)
        }
        setisLoaded(true)
      })
      return listen
    }, [])
   
    if(!isLoaded){
      return <p>...loading</p>
    }
    if(!user){
        return <Navigate to='/login' replace  /> 
    }
    if(user && !user.role){
        return <Navigate to='/unauthorized' replace  /> 
    }
    if(user?.role){
      return <Outlet {...props}/>
    }
    return <></>
 
}
