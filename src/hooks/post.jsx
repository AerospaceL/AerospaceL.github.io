import { useQuery } from "@tanstack/react-query"
import { fetchPostsFromDB } from "@/apis/post"

const usePosts = () => {
  return useQuery(["posts"], fetchPostsFromDB, {
    staleTime: 5 * 60 * 1000, // 5分钟缓存
    cacheTime: 30 * 60 * 1000, // 30分钟保留缓存
  })
}

export { usePosts }
