import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/LoginStore";
// import RegisterForm from "./RegisterFrom";

const LoginForm = ({isOpen}) => {
  const [email,setEmail] = useState('')
  const [password,setpassword] = useState('')
  const [error,setError] = useState('unauthorized')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LoginAction = async(e) => {
    e.preventDefault()
    const data = await {email,password}
    const result = await axios.post('http://127.0.0.1:8000/api/login',data)
    const token = result.data.access_token
    const auth = result.data.auth
    const isAuth = {token,auth}
    if (token && auth) {
      dispatch(login(isAuth))
      navigate("/dashboard")
    }else{
      await setError(() => result.data.message)
      console.log(error)
    }
  }

  return <div>
    <div className="flex flex-col justify-center items-center bg-white p-5 rounded-lg md:h-[40vh] md:w-[30vw] md:portrait:h-[30vh] md:portrait:w-[50vw] lg:h-[50vh]">
      <h1 className="my-3 md:text-2xl font-semibold tracking-wide">Login</h1>
      <form className="flex flex-col space-y-3 md:space-y-5 md:portrait:space-y-5 md:w-4/5" onSubmit={LoginAction}>
        <input type="email" className="input" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} autoFocus/>
        <input type="password" className="input" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
        <button className="btn bg-blue-500 text-white">Login</button>
      </form>
      {/* <RegisterForm /> */}
      <button className="my-3 text-sm text-gray-400 hover:text-gray-800" onClick={()=>isOpen(true)}>Register</button>
    </div>
  </div>
}
export default LoginForm