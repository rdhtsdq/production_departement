// import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import {NavLink} from 'react-router-dom'
import instance from '../api'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/LoginStore'

const SideBar = () => {
  const dispatch = useDispatch(logout())
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
  let headers = {}
  const localStoragetoken = window.localStorage.getItem('token')
  const token = localStoragetoken.slice(0,(localStoragetoken.length - 1)).replace("\"",'')
  if (select.value.token) {
     headers = {
      Authorization:token
    }
    
  }else{
    headers = {
      Authorization:token        
    }
  }

  const LogoutRequest =async () => {
    await instance({
      url:"/logout",
      method:"post",
      headers:{
        Authorization:token
      }
    })
  }
  const handleLogout = async(e) => {
    e.preventDefault()
    LogoutRequest()
    dispatch(logout())
    navigate('/login')
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