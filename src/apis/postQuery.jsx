import { request } from "@/utils/request"

// 1. 根据键值获取文章
export function getPostByKeyAPI(key) {
  return request({
    url: `/${key}`,
    method: "GET",
  })
}

// 2. 获取测试文章
export function getTestMdAPI(slug) {
  console.log("getTESTAPI" + slug)

  return request({
    url: "/",
    method: "POST",
  })
}
