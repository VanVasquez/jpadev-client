import {useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import cliendData from '../../../assets/mockdata/client.json'
import { Button, Card } from 'react-bootstrap';
import Units from './Units';
import AddUnitModal from './AddUnitModal';
import expandIcon from '../../../assets/expand.svg'

interface Client {
  client_id: number;
  first_name: string;
  last_name: string;
  email: string;
  contact: string;
  type: string;
  zip_code: string | null;
}

const ClientsProfile = () => {
  const {client_id} = useParams();
  const [currentClient, setCurrentClient] = useState<Client>();
  const [showAddUnitModal, setShowAddUnitModal] = useState(false);
  const navigate = useNavigate();
  const handleAddUnitModalOpen = () => { setShowAddUnitModal(true)};
  const handleAddUnitModalClose = () => { setShowAddUnitModal(false)};

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
    <Card className='border-primary mb-3'>
      <Card.Body>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Card.Title>{currentClient?.first_name} {currentClient?.last_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{currentClient?.type}</Card.Subtitle>
          </div>
          <div>
            <Button variant="primary" onClick={handleAddUnitModalOpen} style={{ marginRight: '5px' }}>Add Unit</Button>
            <Button variant="secondary" onClick={() => { navigate(`/clients/unit/${client_id}`) }}>
              <img width='30' src={expandIcon} alt="Expand" />
            </Button>

          </div>
        </div>
        <Card.Text>
          <p>Email: {currentClient?.email}</p>
          <p>Contact: {currentClient?.contact}</p>
          <p>Zip Code: {currentClient?.zip_code}</p>
        </Card.Text>
        <AddUnitModal open={showAddUnitModal} close={handleAddUnitModalClose}/>
      </Card.Body>
    </Card> 
    {client_id && (
      <Units client_id={parseInt(client_id)}/>
    )}
  </>
  
  
  )
}

export default ClientsProfile