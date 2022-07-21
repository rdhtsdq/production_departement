import { useSelector } from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoutes = () => {
  const token = useSelector((state) => state.login)
  const isAuth = () => {
    const localdata = localStorage.getItem('token')
    if (token | localdata) {
      return true
    }
    return false
  }
  return (
    isAuth ? <Outlet /> : <Navigate to='/login'/>
  )
  
}

export default ProtectedRoutes