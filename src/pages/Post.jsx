import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { useState, useEffect, useRef } from "react"
import { getTestMdAPI } from "@/apis/postQuery"
import { usePostTest } from "@/hooks/usePost"
import { useParams } from "react-router"

const markdown = "# Hi你好, *Pluto*!"

const Post = () => {
  const { slug } = useParams()
  const { data: md, isLoading, error } = usePostTest(slug)

  useEffect(() => {
    console.log(slug)
  }, [slug])

  return (
    <div>
      <h1>Post page.</h1>
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
