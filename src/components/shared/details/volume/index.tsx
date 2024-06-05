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
import { useDetaillsContext } from "../context/detailsContext";

export default function VolumeDetails(){
    const [loading, setloading] = useState(false)

    const { volume } = useDetaillsContext()
    const [partners, setpartners] = useState<PartnerType[] | null>(null);
    const [owner, setowner] = useState<OwnerType | null>(null);
    
 

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
        <div className="overflow-auto">
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

        </div>



    )
}