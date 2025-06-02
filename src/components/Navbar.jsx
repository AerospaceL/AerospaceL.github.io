import logo from "@/assets/login.png"
import GradientText from "@/styles/GradientText"
import { useState } from "react"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"
import { Link } from "react-router"

const Links = () => {
  return (
    <>
      <Link to="/" className="hover:underline">
        主页
      </Link>
      <Link to="/tech" className="text-blue-500 hover:underline">
        技术
      </Link>
      <Link to="/photo" className="text-yellow-400 hover:underline">
        摄影
      </Link>
      <Link to="/talk" className="text-green-500 hover:underline">
        杂谈
      </Link>
    </>
  )
}

const Navbar = () => {
  // the button of sidemenu
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full h-16 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        <GradientText
          // colors={["#18545a", "#f1f2b5", "#18545a"]}
          colors={["#1452a3", "#00b4d8", "#1452a3"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class"
        >
          焦头烂码
        </GradientText>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer hover:text-blue-600"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? <CloseOutlined /> : <MenuOutlined />}
        </div>
        {/* Mobile link list */}
        <div>
          {/*  top-16 need to be same as Navbar */}
          <div
            className={`w-full h-screen flex flex-col items-center justify-center gap-8 text-lg absolute top-16 transition-all ease-in-out ${
              open ? "-right-0" : "-right-[100%]"
            }`}
          >
            <Links />
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium font-bold">
        <Links />
      </div>
    </div>
  )
}

export default Navbar
