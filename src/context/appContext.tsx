import { createContext, useContext, useMemo, useRef, useState } from "react";
import { Breadcrumb, routeType, Server } from "../types";

type States = {
    
    breadcrum:Breadcrumb,
   datacenter:Server|null,
   server:Server | null,
   volume:Server | null,

   WindowHeight:number,
   resourcesWidth:number,

   selectedPubType : {value: string, icon:string, type:'type' | 'groupe' },
   query: string,
   stats: {volumes: number, publications: number},
   disabled: {publicationBar: boolean, query: boolean, filter:boolean, display:boolean},
   totalHits: number,

   pagination : { offset: number, limit: number, currentPage: number },

   currentTab: 'main' | 'network' | 'grid'
}
type Functions = {

  setBreadcrumb: (data:routeType[]) => void,
  setDatacenter:(data:Server | null) => void,
  setServer:(data:Server | null) => void,
  setVolume:(data:Server | null) => void,

  setWindowHeight: (value:number) => void,
  setresourcesWidth: (value:number) => void

  setSelectedPubType: (data:{ value: string, icon: string, type:'type' | 'groupe' }) => void,
  setdisable : (data:{publicationBar?: boolean, query?: boolean, filter?:boolean, display?:boolean}) => void,
  setStats: (data:{volumes: number, publications: number}) => void,
  setPaginate : (data: { offset?: number, limit?: number, currentPage?: number }) => void,
  setTotalHits: (value:number) => void,
  setQuery: (value:string) => void,
  containerRef:any,
  setcurrentTab : (data: 'main' | 'network' | 'grid') => void

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
   server:null,
   volume:null,
   WindowHeight:500,
   resourcesWidth:500,

   stats: {volumes: 0, publications: 0},
   selectedPubType : {value: '', icon: '', type:'type'},
   pagination:{ offset: 0, limit: 7, currentPage: 1 },
   disabled: {publicationBar: false, query: false, filter:false, display:false},
   query: '',
   totalHits: 0,
   currentTab: 'main'

  })
  
  const containerRef = useRef()
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

    const setVolume =(data:Server | null) => {
      setState((prev) => ({
        ...prev,
        volume:data
      }))
    }


    const setWindowHeight = (value:number) => {
      setState((prev) => ({
        ...prev,
        WindowHeight:value
      }))
    }

    const setresourcesWidth = (value:number) => {
      setState((prev) => ({
        ...prev,
        WindowHeight:value
      }))
    }

    const clearSearch = () => {
      setState((prev) => ({
        ...prev,
        query: '',
        selectedPubType: {value:'', icon:'', type: 'type'},
        pagination:{ offset: 0, limit: prev.pagination.limit, currentPage: 1 }
      }))
    }

    const setSelectedPubType = (data:{ value: string, icon: string  , type:'type' | 'groupe'}) => {
      setState((prev) => ({
        ...prev,
       selectedPubType: data,
       pagination:{ offset: 0, limit: prev.pagination.limit, currentPage: 1 },
       groupBy:''
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

    const  setdisable = (data:{publicationBar?: boolean, query?: boolean, filter?:boolean, display?:boolean}) => {
      setState((prev) => ({
        ...prev,
        disabled: {...prev.disabled, ...data}
      }))
    }

    const setQuery = (query:string) =>{
      setState((prev) => ({
        ...prev,
        query,
        pagination:{ offset: 0, limit: prev.pagination.limit, currentPage: 1 }
      }))
    }

    const setPublicationTypes = (data:any[]) =>{
      setState((prev) => ({
        ...prev,
        publicationTypes: data,
        pagination:{ offset: 0, limit: prev.pagination.limit, currentPage: 1 }
      }))
    }

    const setStats= (data:{volumes: number, publications: number}) => {
      setState((prev) => ({
        ...prev,
        stats: data
      }))
    }
    const setcurrentTab = (data: 'main' | 'network' | 'grid') => {
      setState((prev) => ({
        ...prev,
        currentTab: data
      }))
    }
    return {
      ...state,
      setServer,
      setDatacenter,
      setBreadcrumb,
      setWindowHeight,
      setdisable,
      setPaginate,
      setTotalHits,
      setSelectedPubType,
      clearSearch,
      setQuery,
      setPublicationTypes,
      setStats,
      setresourcesWidth,
      containerRef,
      setcurrentTab,
      setVolume
    }
  }, [state])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};