import { useState,useRef,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/LoginStore";
import instance from "../api";

const LoginForm = ({isOpen}) => {
  const select = useSelector(state => state.login)
  const emailRef = useRef()
  const errRef = useRef()
  const [email,setEmail] = useState('')
  const [password,setpassword] = useState('')
  const [error,setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
  },[])

  useEffect(() => {
    setError('')
  }, [email,password])

  const setTokenToLocalStrorage = (token) => dispatch(login(token))

  const LoginAction = async(e) => {
    e.preventDefault()
    const data = await {email,password}
    const result =await instance({
      url:'login',
      method:"post",
      data,
    }).then((result) => {

      if(result?.data){
        setTokenToLocalStrorage(result.data.access_token)
        localStorage.setItem('token',result.data.access_token)
        console.log(localStorage);
        navigate('/dashboard')
        document.location.reload(true)
      }
    }).catch((e) => {
      if (e.message === "Request failed with status code 401") {
        setError('email atau password salah')
      }
    })
  }

  return <div className="flex flex-col justify-center items-center bg-white p-5 rounded-lg h-[50%] w-[80%] md:h-[50%] md:w-[30vw] md:portrait:h-[30vh] md:portrait:w-[50vw] lg:h-[50vh]">
    <p className={error ? " px-4 py-2 bg-red-500 text-white rounded-sm" : "hidden"} ref={errRef} aria-live="assertive">
        ! {error}
      </p>
      <h1 className="my-3 md:text-2xl font-semibold tracking-wide">Login</h1>
      <form className="flex flex-col space-y-3 md:space-y-5 md:portrait:space-y-5 md:w-4/5" onSubmit={LoginAction}>
        <input type="email" className="input" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} autoFocus autoComplete="off" required/>
        <input type="password" className="input" placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
        <button className="btn bg-blue-500 text-white">Login</button>
      </form>
      {/* <RegisterForm /> */}
      <button type="submit" className="my-3 text-sm text-gray-400 hover:text-gray-800" onClick={()=>isOpen(true)}>Register</button>
    </div>
}
export default LoginForm