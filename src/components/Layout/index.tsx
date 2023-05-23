import {Outlet} from 'react-router-dom'
import Header from "../Header"
import Sidebar from '../Sidebar/indexs'
import {Container} from 'react-bootstrap'
const Layout = () => {
  return (
    <>
    <Header/> 
    <Sidebar/> 
    <main>
      <Container>
        <Outlet/>
      </Container>
    </main>
    </>
  )
}

export default Layout