import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'

type Props = {
  extra?:string
} 
export default function useNavigateTo() {
    const navigate  = useNavigate()
    const params = useParams()
    const { currentTab } = useAppContext()

    const goTo = (to :string,props:any) => navigate(`/widget/${currentTab}/${params.datacenterId}/${params.serverId}${params.type ? `/${params.type}` : ''}${params.type ? `/${params.volume}` : ''}${to}`, props )
  return {
    goTo
  }
}
