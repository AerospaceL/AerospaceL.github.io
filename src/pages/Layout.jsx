import Navbar from "@/components/Navbar"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <div className="px-4 md:px-32 lg:px-48 lx:px-96">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
