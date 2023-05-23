import { Offcanvas } from "react-bootstrap";
import {useState, useEffect} from 'react'
import unitData from '../../../../../assets/mockdata/unit.json'

interface UnitData {
  unit_id: number;
  client_id: number;
  brand: string;
  model: string;
  machine_pin: string;
  serial_no: string;
  date_of_purchase: string;
  data_of_expiration: string;
  warranty_type: string | undefined;
}
type UnitsOffCanvas = {
  open: boolean;
  close: () => void;
  unit_id: number; 
}

const UnitsOffCanvas: React.FC<UnitsOffCanvas> = ({unit_id, open, close}) => {
  const [data, setData] = useState<UnitData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => { 
      const fetchedData = unitData.find(unit => unit.unit_id === unit_id);
      if(fetchedData)
        setData(fetchedData);
    }
    fetchData();
  }, [unit_id])

  return ( 
    <Offcanvas show={open} onHide={close} placement="end"> 
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>UNITS</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {data && (
          <>
            <p> 
              unit id {data.unit_id}
            </p>
            <p> 
              brand {data.brand}
            </p>
            <p> 
              model {data.model}
            </p>
            <p> 
              machine pin {data.machine_pin}
            </p>
            <p>
              serial no {data.serial_no} 
            </p>
              <p> 
            date of purchase  {data.date_of_purchase}
            </p>
            <p> 
              data of expiration  {data.data_of_expiration}
            </p>
            <p> 
            warranty type {data.warranty_type}
            </p>
          </> 
        )}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default UnitsOffCanvas