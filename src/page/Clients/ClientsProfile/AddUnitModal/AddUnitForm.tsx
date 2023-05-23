import { Button, Col, Form, Row } from "react-bootstrap"
import { useForm } from "react-hook-form";
import {format} from 'date-fns'
import {useState} from 'react'
import Toasted from "../../../../components/Toasted";
interface UnitData {
  unit_id: number;
  client_id: number;
  brand: string;
  model: string;
  machine_pin: number;
  serial_no: string;
  date_of_purchase: string;
  data_of_expiration: string;
  warranty_type: string;
  company_id: string;
}
const AddUnitForm = () => {
  const [showA, setShowA] = useState(false);
  const handleShowA = () => setShowA(!showA);
  const {register, handleSubmit, formState: {errors}, reset} = useForm<UnitData>();

  const formatDate = (date: string) => {
    return format(new Date(date), 'yyyy-MM-dd');
  } 
  const onSubmit = (data: UnitData) => {
      const convertedData = {
        ...data, 
        date_of_purchase: formatDate(data.date_of_purchase),
        data_of_expiration: formatDate(data.data_of_expiration)
      }
      console.log(convertedData);
    }

  return (
    <>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group as={Row} controlId="unitBrand" className="mb-3"> 
        <Form.Label column sm={2}>Brand</Form.Label>
        <Col sm={10}>
          <Form.Control {...register('brand', {required: 'please fill up the form'})} />
          {errors.brand && <Form.Text className="text-danger">{errors.brand.message}</Form.Text>}
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="unitModel" className="mb-3"> 
        <Form.Label column sm={2}>Model</Form.Label>
        <Col sm={10}>
          <Form.Control {...register('model', {required: 'please fill up the form'})} />
          {errors.model && <Form.Text className="text-danger">{errors.model.message}</Form.Text>}
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="unitMachinePin" className="mb-3"> 
        <Form.Label column sm={4}>Machine Pin</Form.Label>
        <Col sm={8}>
          <Form.Control {...register('machine_pin', {required: 'please fill up the form'})} />
          {errors.machine_pin && <Form.Text className="text-danger">{errors.machine_pin.message}</Form.Text>}
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} controlId="unitSerialNo" className="mb-3">
        <Form.Label column sm={4}>Serial No</Form.Label>
        <Col sm={8}>
          <Form.Control {...register('serial_no', {required: 'please fill up the form'})} />
          {errors.serial_no && <Form.Text className="text-danger">{errors.serial_no.message}</Form.Text>}
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} controlId="unitDateOfPurchase" className="mb-3">
        <Form.Label column sm={6}>Date Of Purchase</Form.Label>
        <Col sm={6}>
          <Form.Control type="date" {...register('date_of_purchase', {required: 'please fill up the form'})} /> 
          {errors.date_of_purchase && <Form.Text className="text-danger">{errors.date_of_purchase.message}</Form.Text>}
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} controlId="unitDataOfExpiration" className="mb-3">
        <Form.Label column sm={6}>Data Of Expiration</Form.Label>
        <Col sm={6}>
          <Form.Control type="date" {...register('data_of_expiration', {required: 'please fill up the form'})} />
          {errors.data_of_expiration && <Form.Text className="text-danger">{errors.data_of_expiration.message}</Form.Text>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='selectWarrantType' className="mb-3">
        <Form.Label column sm={4}>Warranty Type</Form.Label>
        <Col sm={8}> 
        <Form.Select {...register('warranty_type')}>
          <option disabled>Select Warranty Type</option>
          <option value='onsite'>On Site</option>
        </Form.Select>
        </Col>
      </Form.Group>
      
      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="mr-2" onClick={() => reset()}>Clear</Button>
        <Button type="submit" onClick={handleShowA}>Add</Button>
      </div>
    </Form>
    <Toasted open={showA} close={handleShowA}/>
        </>
  )
}

export default AddUnitForm;
