import React, { useEffect, useState } from 'react'
import { PartnerType, Server } from '../../../types';
import { getVolum, getVolumOwner, getVolumWithPartners } from '../../../utils/requests';
import { useParams } from 'react-router';
import { Spin } from 'antd';
import { useAppContext } from '../../../context/appContext';

export default function Partner() {
    const [partner, setpartner] = useState<PartnerType | null>();
    const params = useParams()
    const [loading, setloading] = useState(false);
    const [volume, setvolume] = useState<Server | null>(null);
    const { setDatacenter, setVolume, setSelectedLocation } = useAppContext()
    useEffect(() => {
        if(!params.id || !params.coll) return 
        if(params.coll !== 'privateDirectories'){
            fetch(getVolumWithPartners({id:params.id, coll:params.coll})).then(res => res.json()).then(data => {setpartner(data.data.partners?.[0]); setvolume(data.data.volume)}).finally(() => setloading(false))

        }else{
            fetch(getVolumOwner({id:params.id, coll:params.coll})).then(res => res.json()).then(data =>setpartner(data.owner)).finally(() => setloading(false))
            fetch(getVolum({id:params.id, coll:params.coll})).then(res => res.json()).then(data =>setvolume(data.data)).finally(() => setloading(false))

        }
    }, []);
    const handleSelectLocation = (loc: {name:string, path:string, network:{coll:string , id:string}}) => {
        setSelectedLocation(loc)
        setloading(true)
        if(loc.network.coll === 'datacenters'){
            fetch(getVolum({id:loc.network.id, coll:loc.network.coll})).then(res => res.json()).then(data => {
                    setDatacenter(data.data)
                    setVolume(null)
              
            }).finally(() => setloading(false))

        }else{
            setVolume(volume)
        }
    }
    useEffect(() => {
        if(partner && volume){
            let path = ''
            let network = {id: '', coll: ''}
            if(params.coll === 'localServers'){
                path = `/${volume.datacenterId[0]}/${volume.id}`
                network = {id: volume.datacenterId[0], coll: 'datacenters'}
                handleSelectLocation({name:volume.title, path, network })
            }else{
                setloading(true)
                fetch(getVolum({id:volume.id, coll:params.coll!})).then(res => res.json()).then((data:{data:Server}) => {
                    path = `/${volume.datacenterId[0]}/${data.data.serverId[0]}/${params.coll}/${volume.id}`
                    network = {id: volume.id, coll: params.coll!}
                    handleSelectLocation({name:volume.title, path, network })
                }).finally(() => setloading(false))
            }
            // navigate({
            //     pathname: path,
            //     search: createSearchParams({url: partner.website}).toString()
            // })
        }
    }, [partner, volume]);
  return (
    <Spin spinning={loading}></Spin>
  )
}
