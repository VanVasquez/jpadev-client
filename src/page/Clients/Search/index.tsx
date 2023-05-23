import { Button, Col, Form, Offcanvas, Row} from "react-bootstrap"
import {useState} from 'react'
import Toasted from "../../../components/Toasted";
type SearchClient = {
  open: boolean,
  close: () => void;
}

const Search: React.FC<SearchClient> = ({open, close}) => { 
  const [showA, setShowA] = useState(true); 
  const toggleShowA = () => setShowA(!showA);

  return (
    <Offcanvas placement='top' show={open} onHide={close}>
       <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search Client</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <Form.Group as={Row}>
            <Col sm={3}> 
            <Form.Select>
              <option disabled>Select Client</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </Form.Select>
            </Col> 
            <Col sm={6}>
              <Form.Control type="text" placeholder="Search" />
            </Col>
            <Col sm={3}>
              <Button variant="primary"onClick={toggleShowA}>Search</Button>  
              <Toasted open={showA} close={toggleShowA}/>
            </Col>
          </Form.Group>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Search