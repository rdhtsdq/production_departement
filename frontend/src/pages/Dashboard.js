import { Route, Routes,Outlet } from "react-router-dom"
import AddData from "../components/AddData"
import DaftarTransaksi from "../components/DaftarTransaksi"
import SideBar from "../components/SideBar"
import { useSelector } from "react-redux"
import LocalToken from "../LocalToken"

const Dashboard = () => {
  console.log(LocalToken);
  return <div className="h-[100vh] w-[100vw] flex justify-between bg-gray-50">
    <SideBar />
    <Outlet />
    <div className="w-full h-full md:w-[85vw] bg-blue-50">
      <Routes>
        <Route path="" element={
          <DaftarTransaksi />
        }/>
        <Route path="/add" element={
          <AddData />
        } />
      </Routes>
    </div>
  </div>
}

export default Dashboard