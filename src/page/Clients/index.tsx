import {useState, useEffect} from 'react'
import { Outlet } from "react-router-dom"
import NewClient from './New';
import {Container, Row, Col, Button } from 'react-bootstrap'
import ClientsList from './ClientsList'; 
import clientData from '../../assets/mockdata/client.json'
import Search from './Search';
import SearchUnit from './SearchUnit';

interface Clients {
    client_id: number;
    first_name: string;
    last_name: string;
    email: string;
    contact: string;
    type: string;
    zip_code: string | null;
}

const Clients = () => { 
  const [newClientFormOpen, setNewClientFormOpen] = useState(false);  
  const handleNewClientFormOpen =() => setNewClientFormOpen(true);
  const handleNewClientFormClose =() => setNewClientFormOpen(false);
  
  const [searchUnitFormOpen, setSearchUnitFormOpen] = useState(false); 

  const handleSearchUnitFormOpen =() => setSearchUnitFormOpen(true);
  const handleSearchUnitFormClose =() => setSearchUnitFormOpen(false);
  
  const [clients, setClients] = useState<Clients[]>([]);

  useEffect(() => {
    function getClients() {
      setClients(clientData);
    }

    getClients();
  },[clients])

  return (
    <Container>   
      <Container className='d-flex align-items-center m-3 justify-content-center'> 
      <Search />   
      <Button variant='primary' onClick={handleNewClientFormOpen} style={{marginLeft: '5px'}}> New Client </Button>  
      <Button variant='primary' onClick={handleSearchUnitFormOpen} style={{marginLeft: '5px'}}> Search Unit </Button>  
      </Container>
      <Row>
        <Col>
        <ClientsList data={clients}/>
        </Col>
        <Col>
        <Outlet/>
        </Col>
      </Row>
      <NewClient open={newClientFormOpen} close={handleNewClientFormClose}/>
      <SearchUnit open={searchUnitFormOpen} close={handleSearchUnitFormClose}/>
    </Container>
  )
}

export default Clients