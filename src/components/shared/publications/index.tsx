
import { useParams } from "react-router-dom";
import OneLineItem from "./format/OneLine";
import { Highlight, Publication } from "../../../types";

type Props ={
  publications:{document:Publication, highlight:Highlight}[],
  handlePublicationSelection: (item:Publication) => void,
  setRecheckPin: ()=> void

}

export default function Publications({ publications, handlePublicationSelection, setRecheckPin } : Props) {
  const params = useParams()

  const renderDate = (date:number) => {
    const formatedDate = new Date(date * 1000).toLocaleDateString("en-US")
    return `${formatedDate}`
  } 
    return (
        <div className={`menu-publication relative w-full -ml-[1px] `}>
            <div>
               {publications && publications?.length > 0 && publications.map((item:any) => (
                    <OneLineItem
                    item={item}
                    active={item.document?.id && (params?.publicationId === item.document?.id)}
                    renderDate={renderDate}
                    handlePublicationSelection={handlePublicationSelection}
                  />
                 
                
                  
              ))}
            </div>
        
     

         
        </div>
    
  )
}