import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Login />
          }/>
          <Route path='/coba' element={
            <h1>Coba</h1>
          }/>
          <Route path='/dashboard' element={
            <Dashboard />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
