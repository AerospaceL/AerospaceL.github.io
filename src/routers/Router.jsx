import Home from "@/pages/Home"
import MainLayout from "@/pages/Layout"
import Photo from "@/pages/Photo"
import Post from "@/pages/Post"
import PostList from "@/pages/PostList"
import Talk from "@/pages/Talk"
import Tech from "@/pages/Tech"
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router"

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tech",
        element: <Tech />,
      },
      {
        path: "/photo",
        element: <Post />,
      },
      {
        path: "/talk",
        element: <Talk />,
      },
      {
        path: "/:slug",
        element: <Post />,
      },
    ],
  },
])

export default router
