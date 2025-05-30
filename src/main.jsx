import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { RouterProvider } from "react-router"
import router from "@/routers/Router.jsx"
import App from "./App.jsx"
import "./index.css"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    {/* <App /> */}
  </StrictMode>
)
