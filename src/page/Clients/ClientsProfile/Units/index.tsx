import {useState, useEffect} from 'react'
import { Card, ListGroup, Pagination } from "react-bootstrap"
import unitData from '../../../../assets/mockdata/unit.json';
import UnitsOffCanvas from './UnitsOffCanvas';

type Units = {
  client_id: number
}

interface UnitData {
  unit_id: number;
  client_id: number;
  brand: string;
  model: string;
  machine_pin: string;
  serial_no: string;
  date_of_purchase: string;
  data_of_expiration: string;
  warranty_type: string;
}

const Units: React.FC<Units> = ({client_id}) => {
  const [units, setUnits] = useState<UnitData[]>([]); 
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [openUnits, setOpenUnits] = useState(false);

  const handleOnOpenUnit = () => setOpenUnits(true)
  const handleOnCloseUnit = () => setOpenUnits(false)

  useEffect(() => {
    function getUnits () {
      setUnits(() => {
        return unitData.filter(unit => unit.client_id === client_id)
      })
    }
    getUnits()
  }, [client_id])

  const pageSize = 5; 
  const [currentPage, setCurrentPage] = useState(1);
  const displayPages = 5;  
  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize; 
  
  // Get the data to display on the current page
  const currentPageData = units.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(units.length / pageSize);

  // Calculate the range of pages to display
  let startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));
  const endPage = Math.min(startPage + displayPages - 1, totalPages);

  if (totalPages - endPage < Math.floor(displayPages / 2)) {
    startPage = Math.max(1, endPage - displayPages + 1);
  }
    // Handle page navigation
    const goToPage = (page: number) => {
      setCurrentPage(page);
    };

  return ( 
    <Card>
      <Card.Body>
        <Card.Title>Units</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">client: {client_id}</Card.Subtitle>
        <ListGroup>
          {currentPageData && currentPageData.map(unit => (
            <ListGroup.Item key={unit.unit_id} action onClick={() => {
              setSelectedUnit(unit.unit_id)
              handleOnOpenUnit();
              }}>
              {unit.brand} {unit.model}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Footer className="d-flex justify-content-center">
          <UnitsOffCanvas unit_id={selectedUnit} open={openUnits} close={handleOnCloseUnit}/>
        <Pagination>
          <Pagination.First onClick={() => goToPage(1)} disabled={currentPage === 1} />
          <Pagination.Prev
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          /> 
          {startPage > 1 && <Pagination.Ellipsis />} 
          {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
            <Pagination.Item
              key={startPage + index}
              active={startPage + index === currentPage}
              onClick={() => goToPage(startPage + index)}
            >
              {startPage + index}
            </Pagination.Item>
          ))}  
          {totalPages - endPage >= Math.floor(displayPages / 2) && <Pagination.Ellipsis />} 
          <Pagination.Next
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </Card.Footer>
      </Card.Body>
    </Card> 
  )
}

export default Units