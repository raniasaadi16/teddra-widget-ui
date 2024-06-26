import { apiEndPoint } from "../constants/apiRequests";

export const getVolum = ({ id, coll}: {id:string, coll:string}) => `${apiEndPoint}/volum/specializeds/${coll}/${id}/get`
export const getActiveGroupsWithChilds = `${apiEndPoint}/publications-types/all`
export const getDomainsAndFeaturedDcs = `${apiEndPoint}/volum/specializeds/domains/featuredDcs`
export const getVolumOwner = ({ id, coll}: {id:string, coll:string}) => `${apiEndPoint}/volum/specializeds/${coll}/${id}/owner`
export const getVolumWithPartners = ({ id, coll}: {id:string, coll:string}) => `${apiEndPoint}/volum/specializeds/${coll}/${id}`
export const getDatacenterLocalServers = ({ id}: {id:string}) => `${apiEndPoint}/volum/specializeds/${id}/servers`
export const getSpecialityDrivess = ({ id, dcId }: {id:string, dcId:string}) => `${apiEndPoint}/volum/specializeds/${dcId}/specDrives/${id}`

