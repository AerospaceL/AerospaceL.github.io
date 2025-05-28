import { request } from "@/utils/request"

// 1. 获取测试文章
export function getTestMdAPI() {
  return request({
    url: "/",
    method: "GET",
  })
}
