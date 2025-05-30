import { useEffect } from "react"

const PostList = ({ postList }) => {
  return (
    <div className="mt-6">
      <div>List page.</div>
      {/* <div>{postList}</div> */}
      {/* <div>{postList.length}</div> */}
      <div>
        {postList.map((item) => (
          <div key={item.post_id}>{item.title}</div>
        ))}
      </div>
    </div>
  )
}

// {
//   channelList.map((item) => (
//     <Option key={item.id} value={item.id}>
//       {item.name}
//     </Option>
//   ))
// }

export default PostList
