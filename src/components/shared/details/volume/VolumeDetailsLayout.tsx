
import { Outlet, useLocation, useParams } from "react-router-dom";

import DetailsLayout from '../layout'

export default function VolumeDetailsLayout(){
    const location = useLocation()

    const params = useParams()



   


  
    
    return(
        <DetailsLayout loading={false} >
                <>
        
                <Outlet/>
                  
                
                </>


        </DetailsLayout>

    )
}