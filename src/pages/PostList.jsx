import { useEffect } from "react"
import { List } from "antd"
import { format, parseISO } from "date-fns"
import { Link } from "react-router"

const PostList = ({ postList, category }) => {
  return (
    <div className="mt-6">
      <List
        className="xl:px-24"
        size="large"
        dataSource={postList}
        renderItem={(item) => (
          <List.Item>
            <Link
              to={`/${category}/${item.slug}`}
              className="text-lg md:text-2xl md:font-bold"
            >
              {item.title}
            </Link>
            {/* <div className="text-lg md:text-2xl">{item.title}</div> */}
            <div className="text-base">
              {format(parseISO(item.created_at), "yyyy-MM-dd HH:mm")}
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}

export default PostList
