import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import unitData from '../../assets/mockdata/unit.json'

type AccordionUnitProps = {
  client_id: number;
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

const AccordionUnit: React.FC<AccordionUnitProps> = ({ client_id }) => { 
  const [units, setUnits] = useState<UnitData[]>([]);   

  useEffect(() => {
    function getUnits() {
      const filteredUnits = unitData.filter(unit => unit.client_id === client_id);
      setUnits(filteredUnits);
    }
    getUnits();
  }, [client_id]);

  return (
    <Accordion className="m-3">
      {units.map((unit) => (
        <Accordion.Item key={unit.unit_id} eventKey={unit.unit_id.toString()}>
          {/* Render the content for each accordion item */}
          {/* Example: */}
          <Accordion.Header>{unit.brand} - {unit.model}</Accordion.Header>
          <Accordion.Body>
            <p>Machine PIN: {unit.machine_pin}</p>
            <p>Serial No: {unit.serial_no}</p>
            <p>Date of Purchase: {unit.date_of_purchase}</p>
            <p>Date of Expiration: {unit.data_of_expiration}</p>
            <p>Warranty Type: {unit.warranty_type}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AccordionUnit;
