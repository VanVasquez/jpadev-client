import { FC } from "react"
import useAuth from "../../hooks/useAuth"
import logo from '../../assets/logo.svg' 
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Header: FC = () => {
  const {auth: {user}} = useAuth();
  const navigate = useNavigate()
  return (
    <Navbar expand='lg' variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} width='30' height='30' className="d-inline-block align-top pe-2"/>
          JPADEV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarMenu"/>
        <Navbar.Collapse id="navbarMenu">
          <Nav className="ms-auto justify-content-end">
            <Nav.Link onClick={() => {navigate("/dashboard")}}>Dashboard</Nav.Link> 
            <Nav.Link onClick={() => {navigate("/clients")}}>Clients</Nav.Link> 
            <NavDropdown className="ml-auto" title={`user: ${user?.email}`} align='end'>
              <NavDropdown.Item onClick={() => {navigate("/:user_id")}}>Profile</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item onClick={() => {navigate('/change-password')}}>Change Password</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {navigate('/')}}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container> 
    </Navbar>
  )
}

export default Header