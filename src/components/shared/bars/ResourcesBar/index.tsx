import DetailsTopBar from "./DetailsPanel"
import ResourcesTopBar from "./ResourcesPanel"

type Props = {

    isPublication?:boolean,
    noDetails?:boolean

}
export const PanelBar = (props:Props) => {
    return (
        <div className='flex  bg-bars '>
            <div className='flex-1 flex flex-col'>
                <ResourcesTopBar isPublication={props.isPublication}/>
            
            </div>
         
         </div>
    )
}