import logo from "@/assets/login.png"
import GradientText from "@/styles/GradientText"
import { useState } from "react"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"

const Navbar = () => {
  // the button of sidemenu
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full h-16 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl">
        <GradientText
          colors={["yellow", "orange", "red"]}
          animationSpeed={8}
          showBorder={false}
          className="custom-class"
        >
          焦头烂码
        </GradientText>
      </div>

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
            className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out ${
              open ? "-right-0" : "-right-[100%]"
            }`}
          >
            menu
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/" className="hover:underline">
          主页
        </a>
        <a href="/" className="hover:underline">
          技术
        </a>
        <a href="/" className="hover:underline">
          摄影
        </a>
      </div>
    </div>
  )
}

export default Navbar
