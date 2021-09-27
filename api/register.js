import http from "./http";
import baseUrl from '../config/config'
export const  getPhoneCode =  phone =>{
    let url = baseUrl.getPhoneCodeUr+`${phone}`
    return  http.get(url)
} 
export const registerMember = (param)=>{
    return http.post(baseUrl.registerUrl,param)
}