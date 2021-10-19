import http from './http'
import baseUrl from '../config/config'

const teacher = {
    getTeacherPage (page,size){
    let url = baseUrl.getTeacherListPageUrl+`${page}/`+`${size}`;
    return http.get(url)

},
   getTeacherInfo (teacherId){
    let url = baseUrl.getTeacherInfoUrl+`${teacherId}`;

    return http.get(url)

   }
  
}
export default teacher;