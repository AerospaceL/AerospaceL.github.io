import { useState } from "react"
import { Button, ConfigProvider } from "antd"

import Layout from "@/pages/Layout"
import Home from "@/pages/Home"

function App() {
  return (
    // <ConfigProvider
    //   theme={{
    //     components: {
    //       Layout: {
    //         // siderBg: "#f5f5f5",
    //         headerBg: "#fff",
    //       },
    //       Menu: {
    //         colorSplit: "#fff",
    //       },
    //     },
    //   }}
    // >
    //   <Layout></Layout>
    // </ConfigProvider>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  )
}

export default App
