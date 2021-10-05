import axios from 'axios'
import Cookies from 'js-cookie'
// 创建axios实例
const service = axios.create({
  baseURL: "http://localhost:3000", // api 的 base_url
  timeout: 50000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
    if (Cookies.get('liyue_token')) {
      config.headers['token'] = Cookies.get('liyue_token')
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 200000) {
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
  export default  service


