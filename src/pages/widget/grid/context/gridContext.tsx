import { createContext, useContext, useMemo, useRef, useState } from "react";

type States = {
    
    selectedNetwork:string| null
   
}
type Functions = {

    setSelectedNetwork : (data:string|null) => void

}
type Props = States & Functions
const GridContext = createContext<Props>({} as Props);

export const useGridContext = () => useContext(GridContext);

export const GridContextProvider = ({ children } : { children : JSX.Element}) => {
  const [state, setState] = useState<States>({
    selectedNetwork:null

  })
  


  const value = useMemo(() => {
    


    const setSelectedNetwork = (data:string|null) => {
      setState((prev) => ({
        ...prev,
        selectedNetwork:data
      }))
    }
 
   


    return {
      ...state,
      setSelectedNetwork
    }
  }, [state])

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};