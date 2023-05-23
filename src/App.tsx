 
import './App.css' 
import {Route, Routes} from 'react-router-dom'
import Login from './page/Login'
import Dashboard from './page/Dashboard'
import Layout from './components/Layout'
import ChangePassword from './page/ChangePassword'
import Clients from './page/Clients'
import ClientsProfile from './page/Clients/ClientsProfile'
import Profile from './page/Profile'

function App() {  
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route element={<Layout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path='change-password' element={<ChangePassword/>}/>
          <Route path='clients' element={<Clients/>}>
            <Route path=':client_id' element={<ClientsProfile/>}/>
          </Route>
          <Route path=':user_id' element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
