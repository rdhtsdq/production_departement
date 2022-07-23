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
  const [no,setNo] = useState(0)
  const [kode,setKode] = useState('')
  const [telp,setTelp] = useState('')
  const [cust_id,setCustId] = useState('')
  const custstate = useSelector((state) => state.cust_id)
  const nomor = useSelector((state) => state.sales)
  const [isloading,setIsLoading] = useState(false)
  const handleSubmit = async (e) => {
    await e.preventDefault()
  }


  useEffect(() => {
    setNo(nomor.value.length + 1)
    setNama(custstate.value.nama)
    setKode(custstate.value.kode)
    setTelp(custstate.value.telp)
    setCustId(custstate.value.id)
  }, [modal])

  useEffect(() => {
  },[modal,modalB])

  return <div className="p-3 flex flex-col items-center md:items-start space-y-3 w-full h-full overflow-x-hidden">
    <h1 className="items-center text-center text-lg font-semibold md:text-left md:text-xl">Tambah Data Transaksi</h1>
    <div className="flex flex-col w-full h-[95%] bg-white rounded-lg shadow p-3 overflow-y-auto">
      <div>
        <section className="form">
          <h1 className="form-section-title">Transaksi</h1>
          <div className="form-input">
            <label htmlFor="no" className="text-sm">No</label>
            <input type="text" value={no} id="no" className="input" readOnly/>
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
          <div className="form-input overflow-x-auto">
              <div className="flex space-y-3 md:space-y-5  flex-col items-center lg:flex-row lg:items-center lg:space-x-5">
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
                <div className="btn bg-blue-500 text-white cursor-pointer" onClick={() => setModal(true)}>{(!cust_id) ? 'pilih' : 'ubah' }</div>
              </div>
            </div>
            <div className="space-y-5">
            </div>
          </div>
        </section>
        <section className='flex flex-col'>
            <h1 className="form-section-title">
              Barang
            </h1>
            <div className="form-input">
              <div className='btn bg-blue-500 text-white cursor-pointer' onClick={() => {setModalB(true)}}>Pilih Barang</div>
              <table className=' w-full'>
                <thead clasName="w-full">
                  <tr className=''>
                    <th>No</th>
                    <th>Kode Barang</th>
                    <th>Nama Barang</th>
                    <th>qty</th>
                    <th>Harga Bandrol</th>
                    <th className=''>
                      <tr>
                        <td>diskon</td>
                      </tr>
                      <tr className='flex space-x-4'>
                        <th>%</th>
                        <th>RP</th>
                      </tr>
                    </th>
                    <th>
                      Harga Diskon
                    </th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div className="flex space-x-2">
                <input type="hidden"/>
                <input type="hidden"/>
                <input type="hidden"  />
                <input type="hidden" />
                <input type="hidden" />
              </div>
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