import { useQuery } from "@tanstack/react-query"
import { getPostByKeyAPI, getTestMdAPI } from "@/apis/postQuery"

const usePost = (key) => {
  return useQuery({
    queryKey: ["post", key],
    queryFn: () => getPostByKeyAPI(key),
    staleTime: 12 * 60 * 60 * 1000, // 12小时缓存
    cacheTime: 24 * 60 * 60 * 1000, // 24小时保留缓存
    enabled: !!key,
  })
}

const usePostTest = (slug) => {
  return useQuery({
    queryKey: ["article_test", slug],
    queryFn: () => getTestMdAPI(slug),
    staleTime: 12 * 60 * 60 * 1000, // 12小时缓存
    cacheTime: 24 * 60 * 60 * 1000, // 24小时保留缓存
    enabled: !!slug,
  })
}

export { usePostTest, usePost }
