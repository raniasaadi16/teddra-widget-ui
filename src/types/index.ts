import React, { ReactElement } from "react"


export type IconOptions = {
    name?: string,
    className: string,
    style?:any
}

export type Publication = {
    id:string,
    title: {en?:string,fr?:string},
    description: {en?:string,fr?:string},
    local: 'en' | 'fr',
    publicationType: {
      iconUrl:string,
      title: {en?:string,fr:string},
      name_singular: {en: string, fr:string}
    },
    keywords: {fr:string[], en:string[]}  ,
    url: string,
    type?:string,
    website:string,
    pubId?:string,
    organization?:{name:string, id:string},
    created_at:number,
    thumbnail?:string,
    media?:{type:string,src:string}[]
} 
export type Highlight={
    title:{
        en:{snippet: string},
        fr?:{snippet:string}
    },
    description:{
        en:{snippet: string},
        fr?:{snippet:string}
    }
}

export type Server = {
    title:string,
    featuredDc?:string,
    id:string,
    key?:string,
    iconUrl:string
    description?:string,
    status: 'enabled' | 'coming_soon' | 'disabled',
    icon?:string,
    depth?:number,
    path:string,
    node?:boolean,
    partnerships?:PartnerType[] | [] ,
    children?:Server[] | [],
    iconType?:string,
    map?:{
        long:number,
        lat:number
    }
    name?:{
        en: string,
        fr:string
    },
    breadcrumbs?:{
        en:string
    }[],
    local?:boolean,
    private?:boolean,
    iconModule?:string,
    coll?:string,
    cfs_type:string,
    parents?:{name:string, path:string}[],
    media?:boolean
} 
export type ServerWithHomeDesq = Server & {
    image?:string,
    bg:string,
    title:{en:string},
    description:{en:string},
    temp:number,
    color:string,
    color2:string,
    domainId:string,
    children?:ServerWithHomeDesq[] ,
} 


export type VolumeSearch = {
    title:{
        en:string,
        fr:string
    },
    id:string,
    iconUrl:string
    description:{
        en:string,
        fr:string
    },
    depth:number,
    node:boolean,
    breadcrumbs:{
        fr?:string,
        en:string
    }[],
    cfs_type:string,
    organizationId?:string,
    map?:number[],
    private:boolean,
    roots:string[],
    datacenterId:string[],
    parentId:string[]
}
export type PartnerType = {
    type: 'sponsor' | 'media_partener',
    title:string,
    description:string,
    website:string,
    id:string,
    key:string,
    coverUrl:string,
    globale:boolean,
    volum_name?:{
        en:string
    },
    logo?:string,
    volums?:{
        volum_name:{
            en:string
        }
    }[]
}
export type OwnerType = {
    name:string,
    description:string,
    website:string,
    id:string,
    media:boolean,
    logo:string,
    globale:boolean,
    adresse?:{
        zipcode?:string,
        city?:string,
        line1?:string,
        line2?:string,

    }
}

export type iconType = {
    type: 'image' | 'icon',
    src:string
}

export type PublicationGroup = {
    status: string, 
    title : {en:string, es?:string, fr?:string}, 
    icon :{id:string, src:string},
    id:string,
    description:string,
    children?:PublicationTypes[]
}

export type PublicationTypes = {
    status: string, 
    name_singular : {en:string, es?:string, fr?:string}, 
    name_plural : {en:string, es?:string, fr?:string}, 
    icon :{id:string, src:string},
    popular:boolean,
    id:string,
    description:string,
    group?:string
}

export type TypeMenuItem = {
    disabled?:boolean,
    label:string,
    key:string,
    onClick?:() => void,
    icon:iconType|JSX.Element
} | {type:'divider'}


export type TopbarTitleProps = {
    title:string | JSX.Element,
    icon: {type: 'image' | 'icon', src:string},

}
export type routeType = {
    action?:() => void,
  name?:string,
  icon?:iconType
}
export type Breadcrumb = {
  routes : routeType[],
  extra?:JSX.Element,
  className?: string
}
export type TitleProps = {
  topbarTitle:TopbarTitleProps,
  close:() => void


}
export type PathProps = {
  Breadcrumb?:Breadcrumb,
  extra?:JSX.Element,
  search?:React.InputHTMLAttributes<HTMLInputElement>,
}
export type ResourcesActions = {
  filter?: {
    setSelectedPubType: (data: {value:string, icon:string, type: 'type' | 'groupe'}) => void,
    selectedPubType: {value:string, icon:string, type: 'type' | 'groupe'},
  },
  display?:{
      setGroupBy: (value:string) => void,
      groupBy:string,
      displayMode:"OneLine" | "TwoLines" | "Thumb" | "Blocks",
      setDisplayMode: (data:"OneLine" | "TwoLines" | "Thumb" | "Blocks") => void

  }
}


export type TopBarprops = {
    collapse?: {
     value:boolean,
     set:()=> void
    },
    path?:PathProps,
    title?:TitleProps,
   
}
