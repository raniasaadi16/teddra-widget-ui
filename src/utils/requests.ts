import { apiEndPoint } from "../constants/apiRequests";

export const getVolum = ({ id, coll}: {id:string, coll:string}) => `${apiEndPoint}/volum/specializeds/${coll}/${id}/get`
