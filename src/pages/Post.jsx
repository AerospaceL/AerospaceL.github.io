import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { useState, useEffect } from "react"

const markdown = "# Hi你好, *Pluto*!"

const Post = () => {
  const [md, setMd] = useState("loading... ...")

  useEffect(() => {
    fetch("/test/test.md")
      .then((resp) => resp.text())
      .then((txt) => setMd(txt))
  }, [md])

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
