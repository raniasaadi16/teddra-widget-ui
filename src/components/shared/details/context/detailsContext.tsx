import { createContext, useContext, useMemo, useRef, useState } from "react";
import { Publication, routeType, Server } from "../../../../types";

type States = {
    
  volume:{id:string,title:string, icon:string, breadcrumb:string, private:boolean, coll:string}  | null;
  publication:Publication | null;
  breadcrumb: {routes: routeType[]},
  totalHits: number,

  pagination : { offset: number, limit: number, currentPage: number },
}
type Functions = {

  setBreadcrumb: (data:routeType[]) => void,

  setVolume:(data:{id:string,title:string, icon:string, breadcrumb:string, private:boolean, coll:string}  | null) => void,
  setPublication:(data:Publication | null) => void,
  setPaginate : (data: { offset?: number, limit?: number, currentPage?: number }) => void,
  setTotalHits: (value:number) => void,

 
}
type Props = States & Functions
const DetaillsContext = createContext<Props>({} as Props);

export const useDetaillsContext = () => useContext(DetaillsContext);

export const DetaillsContextProvider = ({ children } : { children : JSX.Element}) => {
  const [state, setState] = useState<States>({
    breadcrumb:{routes: [{
        icon:{src:'Globe', type:'icon'},
    }]},

   volume:null,
   publication:null,
   pagination:{ offset: 0, limit: 7, currentPage: 1 },
   totalHits: 0,
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
   

    const setVolume =(data:{id:string,title:string, icon:string, breadcrumb:string, private:boolean, coll:string}  | null) => {
      setState((prev) => ({
        ...prev,
        volume:data
      }))
    }

    const setPublication =(data:Publication | null) => {
        setState((prev) => ({
          ...prev,
          publication:data
        }))
      }

      const setTotalHits = (value:number) => {
        setState((prev) => ({
          ...prev,
         totalHits: value
        }))
      }
  
      const setPaginate = (data : { offset?: number, limit?: number, currentPage?: number }) => {
        setState((prev) => ({
          ...prev,
         pagination: {...prev.pagination,...data},
        }))
      }
    return {
      ...state,

      setBreadcrumb,
      setPublication,
      setVolume,
      setTotalHits,
      setPaginate
    }
  }, [state])

  return <DetaillsContext.Provider value={value}>{children}</DetaillsContext.Provider>;
};