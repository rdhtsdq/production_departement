
import { useState,useEffect } from "react"
import instance from "../api"
import token from "../LocalToken"
import RandomString from "../store/RandomString"
import Alert from "./Alert"
import Loading from "./Loading"

const CreateCustomer = ({isOpen}) => {
  const randomstr = RandomString()
  const [nama,setNama] = useState('')
  const [kode,setKode] = useState(randomstr)
  const [telp,setTelp] = useState('')
  const [loading,setLoading] = useState(false)
  const [alertt,setAlert] = useState(false)
  const CreateCust = async(e) => {
    e.preventDefault()
    setLoading(true)
    setAlert(true)
    await instance({
      url:'/customers',
      data:{nama,kode,telp}  
    })
    .then((result) => {
      setLoading(false)
      isOpen(false)
      alert("success create customer")
    }).catch((e) => {
      console.log(e);
    })
    setLoading(true)
  }



  return <div className="fixed top-0 left-0 flex justify-center items-center h-[100vh] w-[100vw] z-40">
  <div className="fixed w-full h-full bg-gray-700 bg-opacity-30 z-50" onClick={() => isOpen(false)}></div>
  <div className="w-[80%] h-[50%] md:w-[50%] z-[60] bg-white rounded-lg">
    <div className="bg-white p-8 rounded-md w-full h-full">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">Buat Data Customer</h2>
          </div>
        </div>
        <div>
          <form className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto" onSubmit={CreateCust}>
            <div className="inline-block min-w-full overflow-hidden">
              <div className="flex flex-col md:items-center space-y-8">
                <div className="flex space-x-3 items-center">
                  <label className="text-gray-600 font-semibold" htmlFor="nama">Nama</label>
                  <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} className="border md:px-6 md:py-2 rounded-md" required/>
                </div>
                <div className="flex space-x-3 items-center">
                  <label className="text-gray-600 font-semibold" htmlFor="kode">Kode</label>
                  <input type="text" id="kode" className="border md:px-6 md:py-2 rounded-md" value={kode} onChange={(e) => setKode(e.target.value)} required/>
                </div>
                <div className="flex space-x-3 items-center">
                  <label className="text-gray-600 font-semibold" htmlFor="tlp">Telepon</label>
                  <input type="tel" id="tlp" className="border md:px-6 md:py-2 rounded-md" value={telp} onChange={(e) => setTelp(e.target.value)} required/>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-evenly space-x-3 my-5">
              <button type="submit" className="px-3 py-2 bg-green-400 text-white font-bold rounded-lg">Selesai</button>
              <button type="button" className="px-3 py-2 bg-red-400 text-white font-bold rounded-lg" onClick={() =>isOpen(false)}>Batal</button>
            </div>
          </form>
        </div>
    </div>
  </div>
  {(loading) ? <Loading /> : ''}
  {(alertt) ? <Alert /> :''}
  </div>
  
}

export default CreateCustomer