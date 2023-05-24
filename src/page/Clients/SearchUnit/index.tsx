import {Offcanvas} from 'react-bootstrap' 

type SearchUnit = {
  open: boolean,
  close: () => void;
}

const SearchUnit: React.FC<SearchUnit> = ({open, close}) => {
  return (
    <Offcanvas show={open} onHide={close}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search Unit</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body> 
        
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default SearchUnit