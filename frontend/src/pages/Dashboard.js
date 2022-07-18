// import { useSelector } from "react-redux"

import DaftarTransaksi from "../components/DaftarTransaksi"
import SideBar from "../components/SideBar"

const Dashboard = () => {
  return <div className="h-[100vh] w-[100vw] flex justify-between bg-gray-50">
    <SideBar />
    <div className="w-full md:w-[85vw]">
      <DaftarTransaksi />
    </div>
  </div>
}

export default Dashboard