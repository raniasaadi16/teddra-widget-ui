import React, { useEffect, useState } from 'react'
import { getVolumWithPartners } from '../../../../utils/requests';
import { PartnerType, Server } from '../../../../types';
import ReactSvg from '../../ReactSvg';
import PartnerWithWebsite from '../../cards/partners/PartnerWithWebsite';
import { Spin } from 'antd';

export default function TeddraOverlay() {
    const [partner, setpartner] = useState<PartnerType | null>(null);
    const [server, setserver] = useState<null | Server>(null);
    const [loading, setloading] = useState(false);
    

    
  return (
    <Spin spinning={loading}>
        {server && (
            <div>
                <div className="bar-h flex space-x-2 items-center">
                    <ReactSvg src={server.iconUrl} className='icon-sm'/>
                    <p>{server.title}</p>
                </div>
                <p className="font-bold">In partnership with :</p>
                {partner && (
                    <PartnerWithWebsite partner={partner} volume={{id: server.id, title:server.title, icon:server.iconUrl, private:false, coll:'localServers', breadcrumb: ''}}/>
                )}

            </div>

        )}
    </Spin>
  )
}
