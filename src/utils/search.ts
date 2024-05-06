

import Typesense from "typesense"

const TYPESENSE_CONFIG :any= {
  
    nodes : [
      {
          host: process.env.REACT_APP_TYPESENSE_HOST,
          port:process.env.REACT_APP_TYPESENSE_PORT,
          protocol:process.env.REACT_APP_TYPESENSE_PROTOCOL
      }
  ],
  apiKey: process.env.REACT_APP_TYPESENSE_KEY
}

export const search = new Typesense.Client(TYPESENSE_CONFIG)


export function searchVolumes({parentId, q,page, offset, limit, filter}: {parentId:string, q:string, page?: number, offset?:number, limit?:number,filter:string }){
  return search.collections('locations').documents().search({
    'q': q,
    'sort_by':'depth:asc',
    'filter_by': `status:enabled && roots:${parentId} && ${filter}`,
    'prioritize_token_position':true,
    'exclude_fields':'pinned_sources',
    'query_by'  : 'title.en, breadcrumbs.en, breadcrumbs.fr, description.en, description.fr, title.fr',
    limit: (limit && limit > 0) ? limit :15,
    page : page? page:1,
    offset: offset?offset:0,


 
  })
}

export function searchPublications({q, volumeId, page, offset, type, groupBy, limit, sponsored}: {q:string, volumeId:string, page?: number, offset?:number, type?:{type: 'groupe' | 'type', value:string}, groupBy?:string, limit?:number, sponsored?:boolean}){
  return search.collections('publications_link').documents().search({
    'q': q,
    'query_by'  : 'title.en, title.fr,description.en, description.fr, keywords.en, keywords.fr, organization.name',
    'filter_by': `status:published && roots:=${volumeId} ${(type?.value && type.type === 'type') ? `&& publicationType.id:${type.value}` : ''} ${(type?.value && type.type === 'groupe') ? `&& publicationGroupe.id:${type.value}` : ''} ${sponsored ? '&& sponsored:true' : ''}`,
    'group_by' : groupBy?groupBy:'',
    limit: (limit && limit > 0) ? limit :15,
    page : page? page:1,
    offset: offset?offset:0,
    facet_by :'publicationType.id',
    'group_limit': 7,
    'text_match_type': 'max_score',
    'prioritize_token_position':true,
    "sort_by": groupBy ? '_group_found:asc' : 'created_at:desc',
    'exclude_fields':'pinned_sources'

  })

}

export const searchVolumeResource = ({id,query, filter}: {id:string, query:string, filter:string}) =>{
  let searchRequests:any = {
    'searches': [
      {
        'collection': 'publications_link',
        'filter_by': `status:published`,
        'query_by'  : 'title.en, title.fr, description.en, description.fr, keywords.en, keywords.fr, organization.name',

      },
      {
        'collection': 'locations',
        'filter_by': `status:enabled && ${filter}`,
        'exclude_fields':'pinned_sources',
        'sort_by':'depth:asc',
        'query_by'  : 'title.en, breadcrumbs.en, breadcrumbs.fr, description.en, description.fr, title.fr',

      }
    ]
  }

  let commonSearchParams =  {
    "filter_by":`roots:=${id}`,
    "q": query,
 
    "limit":7,



}
  return search.multiSearch.perform(searchRequests,commonSearchParams)
}

export const serverStatistics = ({id}: {id:string}) => {
  let searchRequests:any = {
    'searches': [
      {
        'collection': 'publications_link',
        'filter_by': `status:published && roots:=${id}`,
        
      },
      {
        'collection': 'locations',
        'filter_by': `status:enabled && roots:${id}`,
      }
    ]
  }

  let commonSearchParams =  {
    "q":'*',
}
  return search.multiSearch.perform(searchRequests,commonSearchParams)
}

export const recentlyDeployed = ({id, extraFilter}: {id:string, extraFilter:string}) => {

  return search.collections('locations').documents().search({
    'q': '*',
    'query_by'  : 'title.en, title.fr',
    'sort_by': 'created_at:asc',
    'filter_by': `status:enabled && roots:=${id} && ${extraFilter}`,
    'limit': 5,
  

  })
}


export const getPublication = ({id}:{id:string}) => {
  return search.collections('publications_link').documents(id).retrieve()
}
export const getVolume = ({id}:{id:string}) => {
  return search.collections('locations').documents(id).retrieve()
}

export const getPopularCommunities = () => {
  return search.collections('datacenters').documents().search({
    'q': '*',
    'query_by'  : 'title.en',
    'sort_by':'title.en:asc',
    'filter_by': `status:!=disabled && popular:true`,
    'limit': 50,
    'exclude_fields':'pinned_sources'
 
  })
}