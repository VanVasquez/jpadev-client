import React from 'react'
import LoginForm from './LoginForm'
import { Card, Container } from 'react-bootstrap'

const Login = (): React.JSX.Element => {
  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'> 
      <Card>
        <Card.Body>
          <LoginForm />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login