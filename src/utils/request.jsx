// axios的封装处理
import axios from "axios"

// 1. 根域名配置
// 2. 超时时间
// 3. 请求拦截器 / 相应拦截器

const request = axios.create({
  baseURL:
    "https://2dqvkilf4lvtafthfodcppxgve0yxjci.lambda-url.us-east-1.on.aws",
  timeout: 10000,
})

// 响应拦截器: 在响应返回客户端之前 重点处理返回的数据
request.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码
    return response.data
  },
  (error) => {
    // 超出2xx范围的状态码
    // 401: token失效, 清除token并跳转登录
    console.dir(error)
    return Promise.reject(error)
  }
)

export { request }
