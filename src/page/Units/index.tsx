import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import cliendData from '../../assets/mockdata/client.json'
import { Card } from 'react-bootstrap';
import AccordionUnit from './AccordionUnit';

interface Client {
  client_id: number;
  first_name: string;
  last_name: string;
  email: string;
  contact: string;
  type: string;
  zip_code: string | null;
}

const FullUnits = () => {
  const {client_id} = useParams();
  const [currentClient, setCurrentClient] = useState<Client>();  
  useEffect(() => {
    const getClient = () => {
        if(client_id) {
        const client = cliendData.find(client => client.client_id === parseInt(client_id));
        setCurrentClient(client);
      }
    }
      getClient();
  },[client_id]);

  return ( 
    <>
      <Card className='border-primary m-3'>
        <Card.Body>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Card.Title>{currentClient?.first_name} {currentClient?.last_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{currentClient?.type}</Card.Subtitle>
            </div>
            <div>  
            </div>
          </div>
          <Card.Text>
            <p>Email: {currentClient?.email}</p>
            <p>Contact: {currentClient?.contact}</p>
            <p>Zip Code: {currentClient?.zip_code}</p>
          </Card.Text> 
        </Card.Body>
      </Card>   
      {client_id && (
        <AccordionUnit client_id={Number(client_id)} />
      )}
    </>
  )
}

export default FullUnits