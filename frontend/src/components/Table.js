import { useDispatch } from "react-redux"
import { customer } from "../store/Customer_id"

const Table = ({obj,close}) => { 
  const dispatch = useDispatch()
  const getCustById = (obj) => {
    dispatch(customer(obj))
    close(false)
  }

  if(obj.length){
    return <table className="min-w-full leading-normal">
    <thead>
      <tr>
        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Aksi
        </th>
        <th
          className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Nama
        </th>
        <th
          className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Kode
        </th>
        <th
          className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Telepon
        </th>
      </tr>
    </thead>
    <tbody>
      {obj.map((data,index) => <tr key={index} className="overflow-y-auto">
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className=" flex space-x-3">
                        <button type="button" onClick={() => getCustById(data)} className=" p-2 rounded-md bg-green-500 text-white">Pilih</button>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-geay-900 whitespace-no-wrap">
                        {data.nama}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.kode}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.telp}
                      </p>
                    </td>
                  </tr>)}
    </tbody>
  </table>
  } else {
    <h1>Data Kosong</h1>
  }
}

export default Table