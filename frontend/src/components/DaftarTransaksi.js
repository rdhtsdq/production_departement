import {useDispatch,useSelector} from 'react-redux'
import { useState,useEffect } from 'react'
import { create } from '../store/SalesStore'
import instance from '../api'
import { useLocation } from 'react-router-dom'

const DaftarTransaksi = ({data}) => {
  const location = useLocation()
  const [sales, setSales] = useState([])
  const [search,setSearch] = useState('')
  const dispatch = useDispatch()
  const init = useSelector(satet => satet.login)

  useEffect(() => {
    return async () => {
      instance({
        url:'sales_detail',
        method:'get'
      })
      .then((result) => {
        dispatch(create(result.data.data))
        setSales(result.data.data)
      }).catch((err) => {
        console.log(err);
      });
    }
  },[location])

  useEffect(() => {

  },[search])

  return <div className="space-y-14 md:space-y-5 bg-blue-50 h-full p-5">
    <div className="flex flex-col md:flex-row items-center h-[5vh] w-full justify-between">
      <h1 className="mb-3 font-semibold text-xl">Daftar Transaksi</h1>
      <div className='flex space-x-3'>
        <button className='px-2 py-2 rounded-md bg-blue-500 text-white' onClick={ () => document.location.reload(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
        </button>
        <input type="text" className="px-1 py-1 w-[40vw] md:w-[20vw] md:px-4 md: md:py-1 rounded-lg" value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari.."/>
      </div>
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
          {sales.map((data,index) => <tr className="bg-white" key={index}>

            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{index + 1}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data.sales.kode}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data.sales.tgl}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data.sales.customer.nama}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data.qty}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data.qty * data.barang.harga}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data.diskon_nilai}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data.sales.ongkir}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data.total}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
}

export default DaftarTransaksi