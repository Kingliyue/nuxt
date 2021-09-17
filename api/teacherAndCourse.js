import http from "./http";
import baseUrl from "../config/config"
export const getHostTeacherAndCourse = ()=>{
    return http.get(baseUrl.getHostTeacherAndCourseUrl)
}