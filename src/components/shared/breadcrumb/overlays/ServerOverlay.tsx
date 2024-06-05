import React, { useEffect, useState } from 'react'
import { getVolumWithPartners } from '../../../../utils/requests';
import { PartnerType, Server } from '../../../../types';
import ReactSvg from '../../ReactSvg';
import PartnerWithWebsite from '../../cards/partners/PartnerWithWebsite';
import { Spin } from 'antd';

export default function ServerOverlay({ id } : { id:string }) {
    const [partner, setpartner] = useState<PartnerType | null>(null);
    const [server, setserver] = useState<null | Server>(null);
    const [loading, setloading] = useState(false);
    

    useEffect(() => {
        setloading(true)
        fetch(getVolumWithPartners({id, coll: 'localServers'})).then(res => res.json()).then((data) => {
            setpartner(data.data?.partners?.filter((pr:PartnerType) => pr.globale)?.[0])
            setserver(data.data?.volume)
        }).finally(() => setloading(false))
    }, []);
  return (
    <Spin spinning={loading}>
        {server && (
            <div>
                <div className="bar-h flex space-x-2 items-center">
                    <ReactSvg src={server.iconUrl} className='icon-sm'/>
                    <p>{server.title}</p>
                </div>
                <div className='pl-[29px]'>
                    <p className="font-bold pb-3">In partnership with :</p>
                    {partner && (
                        <PartnerWithWebsite vertical partner={partner} volume={{id: server.id, title:server.title, icon:server.iconUrl, private:false, coll:'localServers', breadcrumb: ''}}/>
                    )}

                </div>

            </div>

        )}
    </Spin>
  )
}
