
import { Outlet, useLocation, useParams } from "react-router-dom";

import DetailsLayout from '../layout'
import VolumePathBar from "./VolumePathBar";
import { useEffect, useState } from "react";
import { getVolume } from "../../../../utils/search";
import { storageUrl } from "../../../../constants/apiRequests";
import { useDetaillsContext } from "../context/detailsContext";
export default function VolumeDetailsLayout(){
    const location = useLocation()

    const [loading, setloading] = useState(false)
    const params = useParams()
    const { setVolume, volume, publication } = useDetaillsContext()


    useEffect(()=>{
        if(location.state?.id){
            const item = location.state
            setVolume({id:item.id ,title:item.title.en, icon:`${storageUrl}${item.iconUrl}`, breadcrumb:item.breadcrumbs?.[0]?.en, private:item.private, coll: item.cfs_type})

        }else{
            if(params.volumeId){
                setloading(true)
                getVolume({id:params.volumeId}).then((item:any) => setVolume({id:item.id ,title:item?.title.en, icon:`${storageUrl}${item?.iconUrl}`, breadcrumb:item?.breadcrumbs?.[0]?.en, private:item.private, coll: item.cfs_type})).finally(() => setloading(false))
            }
        }
    },[location.state, params.volumeId])


  
    
    return(
        <DetailsLayout loading={loading} prevPath={location.pathname.includes('all') ? '..': '../..'}>
                <>
                {
                    volume?.private && (

                        <VolumePathBar
                            Breadcrumb={{
                                routes: [
                                    {
                                        name: volume?.title
                                    },
                                    ...location.pathname.includes('publications') ? [{
                                        name: 'Publications'
                                    }] : []
                                    ,
                                    ...(publication && params.publicationId) ? [{
                                        name: publication.title[publication.local]
                                    }] : []
                                ]
                            }}
                        
                        />
                    )
                }
                <Outlet/>
                  
                
                </>


        </DetailsLayout>

    )
}