import { useQuery } from "@tanstack/react-query"
import { fetchPostListFromDB } from "@/apis/postListQuery"

const useFetchPostList = () => {
  return useQuery(["posts"], fetchPostListFromDB, {
    staleTime: 5 * 60 * 1000, // 5分钟缓存
    cacheTime: 30 * 60 * 1000, // 30分钟保留缓存
  })
}

export { useFetchPostList }
