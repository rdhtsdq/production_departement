import axios from "axios"
import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import token from "../LocalToken"
import { customer } from "../store/Customer_id"
import CreateCustomer from "./CreateCustomers"
import Loading from "./Loading"
import Table from "./Table"

const Customers = ({isClose}) => {
  const [open,setOpen] = useState(false)
  const [loading,IsLoading] = useState(false)
  const [cust,setCust] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    return async() => {
      await axios.get('http://127.0.0.1:8000/api/customers',{headers:{Authorization:token}})
      .then((result) => {
        setCust(result.data.data)
      })
    }
    
  }, [open])

  return <div className="fixed top-0 left-0 flex justify-center items-center h-[100vh] w-[100vw] z-10">
    <div className="fixed w-full h-full bg-gray-700 bg-opacity-30 z-20" onClick={() => isClose(false)}></div>
    <div className="z-30 overflow-auto rounded-lg shadow w-[80%] h-[80%] bg-white" >
    <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">Pilih Customer</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="lg:ml-40 ml-10 space-x-8">
              <button className="bg-blue-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" onClick={() => setOpen(true)}>+ Customer</button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <Table obj={cust} close={isClose}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    {(loading) ? <Loading /> : ''}
    {(open) ? <CreateCustomer isOpen={setOpen}/> : ''}
  </div>
}

export default Customers

// w-[90%] min-h-[40%] lg:w-2/3 lg:h-3/4