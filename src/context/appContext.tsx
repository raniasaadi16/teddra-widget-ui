import { createContext, useContext, useMemo, useState } from "react";
import { Breadcrumb, routeType, Server } from "../types";

type States = {
    
    breadcrum:Breadcrumb,
   datacenter:Server|null,
   server:Server | null


}
type Functions = {

  setBreadcrumb: (data:routeType[]) => void,
  setDatacenter:(data:Server | null) => void,
  setServer:(data:Server | null) => void,

}
type Props = States & Functions
const AppContext = createContext<Props>({} as Props);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children } : { children : JSX.Element}) => {
  const [state, setState] = useState<States>({
    breadcrum:{routes: [{
        icon:{src:'Globe', type:'icon'},
    }]},
   datacenter:null,
   server:null
  })
  

  const value = useMemo(() => {
    


    const setBreadcrumb = (data:routeType[]) => {
      setState((prev) => ({
        ...prev,
        breadcrum:{
          routes:data
        }
      }))
    }
    const setDatacenter =(data:Server | null) => {
      setState((prev) => ({
        ...prev,
        datacenter:data
      }))
    }
    const setServer =(data:Server | null) => {
      setState((prev) => ({
        ...prev,
        server:data
      }))
    }

    return {
      ...state,
      setServer,
      setDatacenter,
      setBreadcrumb,
 
    }
  }, [state])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};