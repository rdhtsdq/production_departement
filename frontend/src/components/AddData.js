import React,{useEffect, useState} from 'react'
import AddBarang from './AddBarang'
import Customers from './Customers'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'

const AddData = () => {
  const date = new Date().toISOString().slice(0,7)
  const [modal,setModal] = useState(false)
  const [modalB,setModalB] = useState(false)
  const [tgl,setTgl] = useState(date)
  const [nama,setNama] = useState('')
  const [kode,setKode] = useState('')
  const [telp,setTelp] = useState('')
  const [cust_id,setCustId] = useState('')
  const custstate = useSelector((state) => state.cust_id)
  const [allCust,setAllCust] = useState({})
  const dispatch = useDispatch()
  const [isloading,setIsLoading] = useState(false)
  const handleSubmit = async (e) => {
    await e.preventDefault()
  }


  useEffect(() => {
    setNama(custstate.value.nama)
    setKode(custstate.value.kode)
    setTelp(custstate.value.telp)
    setCustId(custstate.value.id)
  }, [modal])

  useEffect(() => {
    // chageValue(custstate)
  },[modal,modalB])

  return <div className="p-3 flex flex-col items-center md:items-start space-y-3 w-full h-full overflow-x-hidden">
    <h1 className="items-center text-center text-lg font-semibold md:text-left md:text-xl">Tambah Data Transaksi</h1>
    <div className="flex flex-col w-full h-[95%] bg-white rounded-lg shadow p-3">
      <div>
        <section className="form">
          <h1 className="form-section-title">Transaksi</h1>
          <div className="form-input">
            <label htmlFor="no" className="text-sm">No</label>
            <input type="text" id="no" className="input" readOnly/>
          </div>
          <div className="form-input">
            <label htmlFor="tgl">Tanggal</label>
            <input type="date" className='py-1 input' value={tgl} onChange={
              (e) => setTgl(e.target.value)
            }/>
          </div>
        </section>
        <section className="form">
          <h1 className="form-section-title">Customer</h1>
          <div className="form-input">
            {(!custstate.value.id == cust_id) ? <div className="btn bg-blue-500 text-white cursor-pointer" onClick={() => setModal(true)}>Pilih Customer</div>
             :  <div className="space-y-5">
              <div className='space-x-2 flex items-center'>
                <input type="hidden" value={cust_id}  />
                <label htmlFor="nama">Nama</label>
                <input readOnly value={nama} onChange={e => setNama(e.target.value)} type="text" id="nama" className="input cursor-default" />
              </div>
              <div className='space-x-2 flex items-center'>
                <label htmlFor="kode">Kode</label>
                <input readOnly type="text" id="kode" className="input cursor-default" value={kode} onChange={e => setKode(e.target.value)} />
              </div>
              <div className='space-x-2 flex items-center'>
                <label htmlFor="tlp">Telepon</label>
                <input readOnly type="text" id='tlp' className='input cursor-default' value={telp} onChange={e => setTelp(e.target.value)}/>
              </div>
              <div className="flex">
                <div className="btn bg-blue-500 text-white cursor-pointer" onClick={() => setModal(true)}>Ubah</div>
              </div>
            </div>
            
} 
            <div className="space-y-5">
            </div>
          </div>
        </section>
        <section className='form'>
            <h1 className="form-section-title">
              Barang
            </h1>
            <div className="form-input">
              <div className='btn bg-blue-500 text-white cursor-pointer' onClick={() => {setModalB(true)}}>Pilih Barang</div>
            </div>
        </section>
      </div>
      {(modal) ? <Customers isClose={setModal}/> : ''}
      {(modalB) ? <AddBarang isOpen={setModalB}/> : ''}
      {(isloading) ? <Loading /> : ''}
    </div>
  </div>
}
export default AddData