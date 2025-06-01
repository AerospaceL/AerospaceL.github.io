import { request } from "@/utils/request"

// 1. 获取测试文章
export function getTestMdAPI(slug) {
  console.log("getTESTAPI" + slug)

  return request({
    url: "/",
    method: "GET",
  })
}
