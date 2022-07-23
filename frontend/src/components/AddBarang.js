import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import instance from "../api"
import { addProduct } from "../store/ProductsStore"
import ProductTable from "./ProductTable"



const AddBarang = ({isOpen}) => {
  const dispatch = useDispatch
  const [qty, setQty] = useState(0)
  const [products,setProducts] = useState([])
  useEffect(() => {
    return async () => {
      await instance({
        url:'/products',
        method:"get"
      }).then((result) => {
        setProducts(result.data.data)
      }).catch((error) => {
        console.log(error);
      })
    }
  },[isOpen])

  const select = (o) => dispatch(addProduct(o))
  const HandleEdit = () => {

  }

  const HandleDelete = () => {

  }

  return <div className="fixed top-0 left-0 flex justify-center items-center h-[100vh] w-[100vw] z-10">
    <div className="fixed w-full h-full bg-gray-700 bg-opacity-30 z-20" onClick={() => isOpen(false)}></div>
    <div className="flex z-30 bg-white w-[80%] h-[80%] rounded-lg shadow">
      <div className="bg-white p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">Pilih Barang</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="lg:ml-40 ml-10 space-x-8">
              <button className="bg-blue-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">+ Barang</button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <ProductTable open={isOpen} data={products}/>
              <div className="flex w-full justify-end pr-5 space-x-3 my-5">
                <button className="px-3 py-2 bg-red-500 text-white font-bold rounded-lg" onClick={() => isOpen(false)}>Batal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default AddBarang