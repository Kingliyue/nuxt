import http from './http'
import baseUrl from '../config/config'
export const getBannerList = ()=>{
    
    return http.get(baseUrl.getBannerList)

}