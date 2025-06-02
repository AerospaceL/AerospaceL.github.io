import Navbar from "@/components/Navbar"
import { Outlet } from "react-router"
import Footer from "@/components/Footer"

const MainLayout = () => {
  return (
    <div className="px-4 md:px-32 lg:px-48 lx:px-96 min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
