import { Modal } from "react-bootstrap";
import AddUnitForm from "./AddUnitForm";

type AddUnitModal = {
  open: boolean;
  close: () => void;
}

const AddUnitModal: React.FC<AddUnitModal> = ({open, close}) => {
  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>Add Unit</Modal.Header>
      <Modal.Body>
        <AddUnitForm/>
    </Modal.Body>  
    </Modal>
  )
}

export default AddUnitModal