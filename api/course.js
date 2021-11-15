import http from "./http";
import baseUrl from '../config/config'


const course = {
    getCourseListPage(page,size,courseVo){
        let url = baseUrl.getCourseListPageUrl+`${page}/${size}`;
        return http.post(url,courseVo);
    },
    getCourseInfo(courseId){
        let url = baseUrl.getCourseInfoUrl+`${courseId}`
        return http.get(url)
    },
    getSubject(){
        let url = baseUrl.getSubjectUrl
        return http.get(url)
    }
}
export default course;

