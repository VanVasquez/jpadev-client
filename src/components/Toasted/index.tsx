import { Toast } from "react-bootstrap"

type Toasted = {
  open: boolean
  close: () => void
} 
const Toasted: React.FC<Toasted> = ({open, close}) => {
  return (
    <Toast show={open} onClose={close}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Message</strong> 
            </Toast.Header>
            <Toast.Body>:P</Toast.Body>
          </Toast>
  )
}

export default Toasted