import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { useState, useEffect, useRef } from "react"
import { getTestMdAPI } from "@/apis/article"

const markdown = "# Hi你好, *Pluto*!"

const Post = () => {
  const [md, setMd] = useState("文章加载中...")
  // 用 useRef 标记防止重复执行
  const hasFetched = useRef(false)
  useEffect(() => {
    if (!hasFetched.current) {
      const getTestMd = async () => {
        const res = await getTestMdAPI()
        setMd(res)
      }
      getTestMd()
      hasFetched.current = true
    }
  }, []) // 空依赖数组

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
