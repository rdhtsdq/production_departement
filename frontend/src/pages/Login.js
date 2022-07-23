import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterFrom"
import { useState } from "react"

const Login = () => {
  const [open,setOpen] = useState(false)
  return <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw]  bg-gradient-to-r from-sky-500 to-blue-500">
    <h1 className="my-3 text-2xl text-white font-normal md:text-4xl tracking-wider underline underline-offset-[0.5px]">INventory</h1>
    <LoginForm isOpen={setOpen}/>
  </div>
}

export default Login