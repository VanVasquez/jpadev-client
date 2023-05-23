import {useState, useEffect} from 'react'
import { Outlet } from "react-router-dom"
import NewClient from './New';
import {Container, Row, Col, Button } from 'react-bootstrap'
import ClientsList from './ClientsList'; 
import clientData from '../../assets/mockdata/client.json'
import Search from './Search';

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
  const [searchClientFormOpen, setSearchClientFormOpen] = useState(false); 

  const handleNewClientFormOpen =() => setNewClientFormOpen(true);
  const handleNewClientFormClose =() => setNewClientFormOpen(false);
  const handleSearchClientFormOpen =() => setSearchClientFormOpen(true);
  const handleSearchClientFormClose =() => setSearchClientFormOpen(false);
  
  const [clients, setClients] = useState<Clients[]>([]);

  useEffect(() => {
    function getClients() {
      setClients(clientData);
    }

    getClients();
  },[clients])

  return (
    <Container> 
      <Button variant='secondary' onClick={handleSearchClientFormOpen}> Search Client </Button> 
      <Button variant='primary' onClick={handleNewClientFormOpen}> New Client </Button> 
      <Row>
        <Col>
        <ClientsList data={clients}/>
        </Col>
        <Col>
        <Outlet/>
        </Col>
      </Row>
      <NewClient open={newClientFormOpen} close={handleNewClientFormClose}/>
      <Search open={searchClientFormOpen} close={handleSearchClientFormClose}/>
    </Container>
  )
}

export default Clients