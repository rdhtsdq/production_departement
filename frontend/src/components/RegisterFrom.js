import axios from 'axios'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/LoginStore'
import { useNavigate } from "react-router-dom";

const RegisterForm = ({isClose}) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setpassword] = useState('')
  const [error,setError] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const RegisterSubmit = async (e) => {
    e.preventDefault()
    const data = {name,email,password}
    const result = await axios.post('http://127.0.0.1:8000/api/register',data)
    const token = result.data.access_token
    if (token) {
      await dispatch(login(token))
      navigate('/dashboard')
    }


  }

  return <div className="fixed top-0 flex justify-center items-center h-[100vh] w-[100vw]">
    <div className="fixed w-full h-full bg-gray-700 bg-opacity-30 -z-20" onClick={() => isClose(false)}>
    </div>
    <div className="flex flex-col justify-center items-center bg-white rounded-lg p-3 sm:w-2/3 sm:h-1/2 lg:w-2/5 lg:h-2/4 space-y-5"> 
      <h1 className="text-xl md:text-2xl font-semibold tracking-wide">Register</h1>
      <form className="flex flex-col justify-center items-center space-y-3" onSubmit={RegisterSubmit}>
        <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" autoFocus/>
        <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
        <input type="password" className="input" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="password"/>
        <div className="flex space-x-5">
          <button className="btn text-white bg-red-500" onClick={() => isClose(false)}>Cancel</button>
          <button className="btn text-white bg-blue-500">Register</button>
        </div>
      </form>
    </div>
  </div>
}

export default RegisterForm