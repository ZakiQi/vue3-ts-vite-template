import axios from 'axios'
import { ElNotification } from 'element-plus'

const request = axios.create({
  baseURL: '/api/',
  timeout: 60000 // 请求超时时间
})

const errorHandler = (error: {message: string}) => {
  console.log(`err${error}`)
  ElNotification({
    title: '请求失败',
    message: error.message,
    type: 'error'
  })
  return Promise.reject(error)
}

//  请求拦截
request.interceptors.request.use(config => {
  //让每个请求携带token
  // if (getToken() && !isToken) {
  //   config.headers[website.tokenHeader] = 'bearer ' + getToken()
  // }

  return config
}, errorHandler)

// 响应拦截
request.interceptors.response.use(response => {
  const { data } = response

  if(data.code) {
    // 请求失败
    let title = '请求失败'
    if(data.code === 401) {
      // 如果获取不到token，退出登陆。。。
      title = '身份认证失败'
    }

    ElNotification({
      title,
      message: data.message,
      type: 'error'
    })
    return Promise.reject(new Error(data.message || 'Error'))
  }
  
  return data.data
}, errorHandler)

export default request