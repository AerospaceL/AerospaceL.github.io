import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { RouterProvider } from "react-router"
import router from "@/routers/Router.jsx"
import App from "./App.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </StrictMode>
)
