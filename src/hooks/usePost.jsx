import { useQuery } from "@tanstack/react-query"
import { getTestMdAPI } from "@/apis/postQuery"

const usePostTest = (slug) => {
  return useQuery({
    queryKey: ["article_test", slug],
    queryFn: () => getTestMdAPI(slug),
    staleTime: 12 * 60 * 60 * 1000, // 12小时缓存
    cacheTime: 24 * 60 * 60 * 1000, // 24小时保留缓存
    enabled: !!slug,
  })
}

export { usePostTest }
