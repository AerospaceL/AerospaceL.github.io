import PostList from "./PostList"
import { useFetchPostListByCategory } from "@/hooks/usePostList"
import { Spin } from "antd"

const Photo = () => {
  const {
    data: postList,
    isLoading,
    error,
  } = useFetchPostListByCategory("photo")

  return (
    <div className="lg:px-16 mt-6">
      {/* 板块介绍 */}
      <div className="grid gap-y-4">
        <div className="text-base">摄影技术系列文章</div>
        <div className="text-sm">
          共{isLoading ? 0 : postList.length}篇文章/共
          {isLoading
            ? 0
            : postList.reduce((sum, post) => sum + post.word_count, 0)}
          个文字
        </div>
        <div className="border-b border-blue-400"></div>
      </div>
      {/* 文章列表 */}
      {isLoading ? (
        <div className="mt-8 flex flex-grow justify-center">
          <Spin></Spin>
        </div>
      ) : (
        <PostList postList={postList || []} category={"photo"}></PostList>
      )}
    </div>
  )
}

export default Photo
