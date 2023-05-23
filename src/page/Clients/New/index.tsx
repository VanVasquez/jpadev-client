import {Offcanvas} from 'react-bootstrap'
import NewClientForm from './NewClientForm';

type NewClient = {
  open: boolean,
  close: () => void;
}

const NewClient: React.FC<NewClient> = ({open, close}) => {
  return (
    <Offcanvas show={open} onHide={close}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Add Client</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       <NewClientForm/>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default NewClient