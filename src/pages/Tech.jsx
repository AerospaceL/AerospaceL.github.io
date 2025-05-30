import { useEffect, useState } from "react"
import PostList from "./PostList"
import { usePosts } from "@/hooks/post"
import { fetchPostsFromDB } from "@/apis/post"

const Tech = () => {
  const { data: postList, isLoading, error } = usePosts()

  return (
    <div className="lg:px-16 mt-6">
      {/* 板块介绍 */}
      <div className="grid gap-y-4">
        <div className="text-base">编程技术系列文章</div>
        <div className="text-sm">共3篇文章/共1000个文字</div>
        <div className="border-b border-blue-400"></div>
      </div>

      <PostList postList={postList || []}></PostList>
    </div>
  )
}

export default Tech
