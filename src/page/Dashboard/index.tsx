import { Button, Card } from "react-bootstrap"; 
import useAuth from "../../hooks/useAuth"; 
import useRefreshToken from "../../hooks/useRefreshToken";

const Dashboard = () => { 
  const refresh = useRefreshToken();
  const {auth:{user}} = useAuth() 

  return (
    <div>
      <h3>ACCESS TOKEN: {user?.accessToken.slice(0, 4)}... {user?.accessToken.slice(user.accessToken.length-4)}</h3>
      <Button onClick={() => refresh()}>Refresh</Button>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>JPADEV</h1>
          </Card.Title>
          <Card.Text>
            <h2>The application is still on development</h2>
            <p>the datas in here are mock data meaninng they are not real. they are for development purpose.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Dashboard