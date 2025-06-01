import { useEffect, useState } from "react"
import PostList from "./PostList"
import { useFetchPostListByCategory } from "@/hooks/usePostList"

const Tech = () => {
  const {
    data: postList,
    isLoading,
    error,
  } = useFetchPostListByCategory("tech")

  return (
    <div className="lg:px-16 mt-6">
      {/* 板块介绍 */}
      <div className="grid gap-y-4">
        <div className="text-base">编程技术系列文章</div>
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
      <PostList postList={postList || []} category={"tech"}></PostList>
    </div>
  )
}

export default Tech
