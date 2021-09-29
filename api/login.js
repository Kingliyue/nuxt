import http from './http'
import baseUrl from '../config/config'
export const getUserInfo = ()=>{
    return http.get(baseUrl.getTokenUrl)
}
export const login = user=>{
    return http.post(baseUrl.loginUrl,user)
}