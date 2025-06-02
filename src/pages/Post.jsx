import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { useState, useEffect, useRef } from "react"
import { usePost } from "@/hooks/usePost"
import { useMatch } from "react-router"
import { useFetchOnePostInfo } from "@/hooks/usePostList"
import { Spin } from "antd"
import { CalendarFilled, ClockCircleFilled } from "@ant-design/icons"
import { format, parseISO } from "date-fns"
import { formatSeconds } from "@/utils/formDate"

const markdown = "# Hi你好, *Pluto*!"

const Post = () => {
  const match = useMatch("/:category/:slug")
  const category = match?.params?.category
  const slug = match?.params?.slug
  const postKey = category + "/" + slug

  const {
    data: md,
    isLoading: mdIsLoading,
    error: mdIsError,
  } = usePost(postKey)

  const {
    data: postInfo,
    isLoading: postInfoIsLoading,
    error: postInfoError,
  } = useFetchOnePostInfo(category, slug)

  useEffect(() => {
    // console.log(postKey)
  }, [postKey])

  return (
    <div className="mt-16 flex-col flex gap-y-4">
      {/* 文章信息加载 */}
      {postInfoIsLoading ? (
        <Spin />
      ) : (
        <div>
          <div className="flex-row flex">
            <div className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 from-10% to-blue-500 to-70% ">
              {postInfo[0].title}
            </div>
            <div className=""></div>
          </div>

          <div className="mt-4 flex-row flex gap-x-2 items-center">
            <CalendarFilled />
            <div>{format(parseISO(postInfo[0].created_at), "yyyy-MM-dd")}</div>
            <ClockCircleFilled className="ml-8" />
            <div>
              {formatSeconds(postInfo[0].reading_time)} |{" "}
              {postInfo[0].word_count} 字 | {postInfo[0].view_count} 次阅读
            </div>
          </div>
        </div>
      )}

      {mdIsLoading ? (
        <Spin />
      ) : (
        <div className="space-y-3 text-lg md:shadow-2xl md:p-8 md:tracking-wider">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={rehypeRaw}>
            {md}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )
}

export default Post
