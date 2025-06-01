import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { useState, useEffect, useRef } from "react"
import { usePost } from "@/hooks/usePost"
import { useMatch } from "react-router"

const markdown = "# Hi你好, *Pluto*!"

const Post = () => {
  const match = useMatch("/:category/:slug")
  const category = match?.params?.category
  const slug = match?.params?.slug
  const postKey = category + "/" + slug
  const { data: md, isLoading, error } = usePost(postKey)

  useEffect(() => {
    console.log(postKey)
  }, [postKey])

  return (
    <div>
      <h1>Post page. {slug}</h1>
      <div className="space-y-3 text-lg md:shadow-2xl md:p-8 md:tracking-wider">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={rehypeRaw}>
          {md}
        </ReactMarkdown>
      </div>
      <p>Post page.</p>
    </div>
  )
}

export default Post
