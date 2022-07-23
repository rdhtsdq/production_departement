import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../store/ProductsStore"

const ProductTable = ({data,open}) => {
  const [qty,setQty] = useState(0)
  const dispatch = useDispatch()
  const prod = data
  const select = useSelector(state => state.product)
  
  const handleSelect = (data) => {
    dispatch(addProduct(data))
    console.log(select);
    open(false)
  }
  const HandleDelete = () => {

  }

  const HandleEdit = () => {
    
  }

  return <table className="min-w-full leading-normal">
  <thead>
    <tr>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        Aksi
      </th>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        No
      </th>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        Kode
      </th>
      <th
        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        Nama
      </th>
      <th
        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        Harga
      </th>
      <th
        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
        Jumlah
      </th>
    </tr>
  </thead>
  <tbody>
    {prod.map((product,index) => <tr key={index}>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className=" flex space-x-3">
          <button className=" px-2 py-1 rounded-md bg-green-500 text-white" onClick={() =>handleSelect(({product,qty}))}>Pilih</button>
          <button className="bg-red-500 px-2 py-1 text-white rounded-md" onCanPlay={HandleDelete}>Hapus</button>
        </div>
      </td> 
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-geay-900 whitespace-no-wrap">
          {index+1}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-geay-900 whitespace-no-wrap">
          {product.kode}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-geay-900 whitespace-no-wrap">
          {product.nama}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {product.harga}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex w-10">
          <input type="number" className="border rounded-lg py-1 text-center w-12" value={qty} onChange={e => setQty(e.target.value)} />
        </div>
      </td>
    </tr>
    )}
  </tbody>
</table>


}

export default ProductTable