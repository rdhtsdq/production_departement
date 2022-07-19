// import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import {NavLink} from 'react-router-dom'
import instance from '../api'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const navigate = useNavigate()
  const Active = ({isActive}) => {
    let classname = ''
    if (isActive) {
      return classname += 'font-bold border-r-4'
    }else{
      return 'pl-2'
    }
  }
  const select = useSelector(state => state.login)
  console.log(select.value)
  const handleLogout = async(e) => {
    e.preventDefault()
    const logout = await instance({
      url:"/logout",
      method:"post",
      headers:{
        Authorization:`Bearer ${select.value.token}`
      }
    }).then(() => {
      navigate("/login")
    }).catch((e) => console.error(e))
  }

  return <nav className="hidden md:flex flex-col p-5 space-y-3 justify-between w-[15vw] h-full bg-blue-500 text-white">
    <div className='space-y-3'>
      <h1 className="font-semibold text-xl mb-8">Halo, Admin !</h1>
      <div className='flex flex-col space-y-2'>
        <NavLink to="" className={Active}>Dashboard</NavLink>
        <NavLink to="add" className={Active}>Add data</NavLink>
      </div>
    </div>
    <form onSubmit={handleLogout}>
      <button>Logout</button>
    </form>
  </nav>
}

export default SideBar