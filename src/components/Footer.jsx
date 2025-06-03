import { Link } from "react-router"
import GradientText from "@/styles/GradientText"
import { Tooltip } from "antd"
import MyNameLink from "./MyNameLink"

const Footer = () => {
  return (
    <div className="text-sm text-center text-gray-400 mt-16">
      <div className="flex justify-center space-x-1">
        <div className="hidden sm:flex">
          LanMa Blog © 2025 - {new Date().getFullYear()}
        </div>
        <div>Created by </div>
        <div className="">🌟</div>
        <MyNameLink></MyNameLink>
        <div className="">🌟</div>
      </div>
    </div>
  )
}

export default Footer
