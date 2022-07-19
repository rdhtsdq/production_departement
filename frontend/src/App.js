import {Routes,Route,Navigate} from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Navigate to='/login'/>} />
          <Route element={<ProtectedRoutes />}>
            <Route path='dashboard/*' element={<Dashboard />} exact/>
          </Route>
          <Route path='/login' element={
              <Login />
            }/>
        </Routes>
    </div>
  );
}

export default App;
