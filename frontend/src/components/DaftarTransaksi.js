import {useSelector,useDispatch} from 'react-redux'
import { useState,useEffect } from 'react'
import { create } from '../store/SalesStore'
import token from '../LocalToken'
import axios from 'axios'

const DaftarTransaksi = ({data}) => {
  const [sales, setSales] = useState({})
  const dispatch = useDispatch()
  const setData = (data) => setSales(data)
  useEffect(() => {
    return async() => {
      const result =await axios.get('http://127.0.0.1:8000/api/sales_detail',{ headers:{Authorization : `Bearer ${token}`} } )
      setData(result.data.data)
      dispatch(create(result.data.data))
    }
  }, [])

  console.log(useSelector(state => state.sales))
  // const ReturnData = Array(sales).map((sale,index) => <tr key={index}>
  //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{index}</td>
  //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
  //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{sale[0].tgl}</td>
  //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
  //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
  //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
  //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
  //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
  //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap"></td>
  // </tr>)


  return <div className="space-y-5 bg-blue-50 h-full p-5">
    <div className="flex items-center h-[5vh] w-full justify-between">
      <h1 className="mb-3 font-semibold text-xl">Daftar Transaksi</h1>
      <form className="divide-x-2">
        <input type="text" className="px-1 py-1 w-[40vw] md:w-[20vw] md:px-4 md: md:py-1 rounded-lg" placeholder="Cari.."/>
      </form>
    </div>
    <div className="overflow-auto rounded-lg shadow">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">No</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">No Transaksi</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Tanggal</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Nama Customer</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Jumlah Barang</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Sub Total</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Diskon</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Ongkir</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr className="bg-white">

            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">1</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">202101-0001</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">01-jan-2021</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Cust A</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">3</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">250000</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">5000</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">15000</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">260000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
}

export default DaftarTransaksi