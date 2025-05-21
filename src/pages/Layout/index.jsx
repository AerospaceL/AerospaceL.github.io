import { Button, Layout, Menu, Space } from "antd"

const { Header } = Layout

const items = [
  {
    label: "Home",
    key: "/home",
  },
  {
    label: "笔记",
    key: "/note",
  },
  {
    label: "摄影",
    key: "/photo",
  },
]

const centerStyle = {
  justifyContent: "center",
  flex: 1,
}

const GenetalLayout = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          // zIndex: 1,
          // width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu mode="horizontal" items={items} style={centerStyle}></Menu>
      </Header>
    </Layout>
  )
}

export default GenetalLayout
