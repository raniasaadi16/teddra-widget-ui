import { useEffect, useState } from "react";
import ObjectMode from "../modes/Object";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Spin } from "antd";
import { storageUrl } from "../../../../constants/apiRequests";
import { getVolume } from "../../../../utils/search";
import { OwnerType, PartnerType } from "../../../../types";
import { getVolumOwner, getVolumWithPartners } from "../../../../utils/requests";
import PartnerWithWebsite from "../../cards/partners/PartnerWithWebsite";

import OwnerWithWebsite from "../../cards/owner/OwnerWithWebsite";
import DetailsLayout from "../layout";

export default function VolumeDetails(){
    const [loading, setloading] = useState(false)

    const [partners, setpartners] = useState<PartnerType[] | null>(null);
    const [owner, setowner] = useState<OwnerType | null>(null);
    const params = useParams()
    const [volume, setVolume] = useState<{id: string;
        title: string;
        icon: string;
        breadcrumb: string;
        private: boolean;
        coll: string;}| null>();
    const location = useLocation()


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
 

    useEffect(() => {
        if(volume){
            if(volume.private){
                setloading(true)
                fetch(getVolumOwner({id:volume.id, coll:volume.coll})).then(res => res.json()).then(data => setowner(data.owner)).catch(err => console.log(err)).finally(() => setloading(false))
                setpartners(null)
            }else{
                setloading(true)
                fetch(getVolumWithPartners({id:volume.id, coll:volume.coll})).then(res => res.json()).then(data => {
                    if(volume.coll === 'localServers'){
                        setpartners(data.data?.partners?.filter((pr:PartnerType)=> pr.globale) )
                    }else{
                        setpartners(data.data?.partners)
                    }
                }).catch(err => console.log(err)).finally(() => setloading(false))

                setowner(null)
            }
        }
    }, [volume]);
    
    return(

        <DetailsLayout loading={false} >
            <Spin spinning={loading}>
                {volume && <ObjectMode
                    fields={
                        [
                            {
                                name:'Name',
                                value:volume.title,
                                center:true
                            },
                            {
                                name:'Type',
                                value:volume.private ? 'Commercial volume' : (volume.coll === 'specDrives' ? 'Specialized volume': (volume.coll === 'localServers' ? 'Country server' : 'Local volume')),
                                center:true
                            },
                            ...(partners && partners.length >0) ? [
                                {
                                    name: 'Partners',
                                    value: <div>
                                        {partners.map(partner => (
                                            <div key={partner.id}>
                                                <PartnerWithWebsite partner={partner} volume={volume}/>
                                            </div>
                                        ))}
                                    </div>
                                }
                            ] : [],
                            ...(owner && owner.name) ? [
                                {
                                    name: 'Owner',
                                    value: <div>
                                        
                                            <OwnerWithWebsite owner={owner} volume={volume}/>
                                        
                                    </div>
                                }
                            ] : []
                        ]
                    }
                    thumb={{
                        type:'icon',
                        icon:{type:'image', src:volume.icon}
                    }}
                />}
            
            </Spin>

        </DetailsLayout>




    )
}