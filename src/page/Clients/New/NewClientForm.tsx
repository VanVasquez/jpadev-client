import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'  
import {Form, Button} from 'react-bootstrap'

type ClientType = 'individual' | 'organization';

type NewClientForm = {
  first_name: string
  last_name: string
  email: string
  contact: string
  type: ClientType
  zip_code: string
  company_id: string
}

const NewClientForm = (): React.JSX.Element => { 
  const {register, handleSubmit, reset, formState: {errors}} = useForm<NewClientForm>(); 

  const onSubmit: SubmitHandler<NewClientForm> = data => {
    console.log(data)
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}> 
      <input hidden {...register('company_id', {value: '123'})}/> 
      <Form.Group className='mb-3' controlId='firstName'>
        <Form.Label>First Name</Form.Label>
        <Form.Control {...register('first_name', {required:true})} />
        { errors.last_name &&
          <Form.Text className='text-muted'>
            First name can't be empty
          </Form.Text>
        }
      </Form.Group>
      <Form.Group className='mb-3' controlId='lastName'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control {...register('last_name', {required:true})} />
        { errors.last_name &&
          <Form.Text className='text-muted'>
            Last name can't be empty
          </Form.Text>
        }
      </Form.Group> 
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control {...register('email', {required:true})} />
        { errors.email &&
          <Form.Text className='text-muted'>
            Email can't be empty
          </Form.Text>
        }
      </Form.Group>
      <Form.Group className='mb-3' controlId='contact'>
        <Form.Label>Contact</Form.Label>
        <Form.Control {...register('contact', {required:true})} />
        { errors.contact &&
          <Form.Text className='text-muted'>
            Contact can't be empty
          </Form.Text>
        }
      </Form.Group>
      <Form.Group className='mb-3' controlId='zipCode'>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control {...register('zip_code', {required:true})} />
        { errors.zip_code &&
          <Form.Text className='text-muted'>
            Zip code can't be empty
          </Form.Text>
        }
      </Form.Group>
      <Form.Group className='mb-3' controlId='type'>
        <Form.Label>Type</Form.Label>
        <Form.Control as='select' {...register('type')}>
          <option value='individual'>Individual</option>
          <option value='organization'>Organization</option>
        </Form.Control>
      </Form.Group> 
      <div className="d-flex justify-content-end">
        <Button onClick={() => {reset()}} variant='secondary'>Clear</Button> 
        <Button type='submit'>Submit</Button>  
      </div>
    </Form>
  )
}

export default NewClientForm