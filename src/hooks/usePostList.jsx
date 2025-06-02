import { useQuery } from "@tanstack/react-query"
import {
  fetchPostListFromDB,
  fetchTechPostListFromDB,
  fetchPostListByCategoryFromDB,
  fetchPostInfoFromDB,
} from "@/apis/postListQuery"

const defaultStaleTime = 5 * 60 * 1000 // 5分钟缓存
const defaultCacheTime = 30 * 60 * 1000 // 30分钟保留缓存

const useFetchPostList = () => {
  return useQuery(["postList"], fetchPostListFromDB, {
    staleTime: defaultStaleTime,
    cacheTime: defaultCacheTime,
  })
}

const useFetchTechPostList = () => {
  return useQuery(["techPostList"], fetchTechPostListFromDB, {
    staleTime: defaultStaleTime,
    cacheTime: defaultCacheTime,
  })
}

const useFetchPostListByCategory = (category) => {
  return useQuery({
    queryKey: ["PostList", category],
    queryFn: () => fetchPostListByCategoryFromDB(category),
    staleTime: defaultStaleTime,
    cacheTime: defaultCacheTime,
  })
}

const useFetchOnePostInfo = (category, slug) => {
  return useQuery({
    queryKey: ["PostInfo", category, slug],
    queryFn: () => fetchPostInfoFromDB(category, slug),
    staleTime: defaultStaleTime,
    cacheTime: defaultCacheTime,
  })
}

export {
  useFetchPostList,
  useFetchTechPostList,
  useFetchPostListByCategory,
  useFetchOnePostInfo,
}
