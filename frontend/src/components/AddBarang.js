import { useState } from "react"

const AddBarang = ({isOpen}) => {
  const [qty, setQty] = useState({ jml: 0, id: '' })
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
              <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">+ Barang</button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
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
                      Harga
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className=" flex space-x-3">
                        <button className=" p-2 rounded-sm bg-green-300">Pilih</button><button className="bg-blue-300 p-2 rounded-sm ">Edit</button>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-geay-900 whitespace-no-wrap">
                        Asbes
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        20000
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex w-10">
                        <input type="number" className="border rounded-lg py-1 text-center" value={qty.jml} onChange={e => setQty({ jml: e.target.value })} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex w-full justify-evenly space-x-3 my-5">
                <button className="px-3 py-2 bg-green-400 text-white font-bold rounded-lg">Selesai</button>
                <button className="px-3 py-2 bg-red-400 text-white font-bold rounded-lg">Batal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default AddBarang