import { useEffect, useState } from "react"

type Props = {
    setPaginate:any,
    all?:boolean, 
    windowHeight:number,
    type: 'publication' | 'volume',
    resourcesWidth:number
}
export const useHandleLimits= ({setPaginate , windowHeight, type, resourcesWidth}:Props) => {
    const [volumesColums, setvolumesColums] = useState(1);

    useEffect(() => {
        if(type === 'volume'){
            const column = Math.floor(resourcesWidth/290)
            setvolumesColums(column)
        }

    }, [resourcesWidth]);
    useEffect(() => {
        function handleResize() {
            const limit = Math.round((windowHeight-240)/(type === 'publication' ? 30 : 70/volumesColums)) - (type === 'publication' ? 1 : 0)
            if(limit > 0){
              setPaginate({limit})
            }else{
              setPaginate({limit:0})
            }
            
        
    }
         handleResize()
      }, [windowHeight, volumesColums, type])


    return{

    }
}