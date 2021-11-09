import http from "./http";
import baseUrl from '../config/config'
const corse= {
    getCourseListPage(page,size){
        let url = baseUrl.getCourseListPageUrl+`${page}`+`/${size}`
        return http.get(url)
    }
}
export default corse;