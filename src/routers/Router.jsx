import Home from "@/pages/Home"
import MainLayout from "@/components/Layout"
import Photo from "@/pages/Photo"
import Post from "@/pages/Post"
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
        path: "/:category/:slug",
        element: <Post />,
      },
      {
        path: "/photo",
        element: <Photo />,
      },
      {
        path: "/talk",
        element: <Talk />,
      },
    ],
  },
])

export default router
