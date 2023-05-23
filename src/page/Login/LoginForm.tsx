 import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form' 
import {useNavigate} from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import useLogin from '../../hooks/useLogin'

type LoginForm = {
  email: string
  password: string
}

const LoginForm = (): React.JSX.Element => {  
  const login = useLogin()
  const {register, handleSubmit, formState: {errors}} = useForm<LoginForm>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    // const {status} = await login(data)
    // if(status === 200)
      navigate('/dashboard');
  };

  return ( 
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='mb-3' as={Row}> 
      <Form.Label column md='4'>Email</Form.Label> 
        <Col>
      <Form.Control {...register('email', {required: true})}/>
      {errors.email && <span>Email can't be empty</span>}
        </Col>
      </Form.Group>
      <Form.Group className='mb-3' as={Row}>
      <Form.Label column md='4'>Password</Form.Label>
      <Col>
      <Form.Control {...register('password', {required: true})}/>
      {errors.password && <span>Password can't be empty</span>}
      </Col>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button type="submit">Login</Button>
      </div>
    </Form>
  )
}

export default LoginForm