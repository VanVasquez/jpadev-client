import { Button, Form } from "react-bootstrap"
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import clientData from '../../../assets/mockdata/client.json'
 

type SearchType = 'email';

const Search: React.FC = () => { 
  const [search, setSearch] = useState<string | number>('')
  const [searchType, setSearchType] = useState<SearchType>('email');
  const navigate = useNavigate();

  const searchClient = (e: React.FormEvent) => {
    e.preventDefault() 
    const client = clientData.find((c => c[searchType] === search ))
    navigate(`${client?.client_id}`)
  }

  return (
    <Form onSubmit={searchClient} className="d-flex">
    <Form.Group className="d-flex align-items-center">
      <Form.Select
        className="me-2"
        onChange={(e) => setSearchType(e.target.value as SearchType)}
        value={searchType}
      >
        <option disabled>Select Client</option>
        <option value="email">Email</option>
      </Form.Select>
      <Form.Control
        type="text"
        placeholder="Search"
        className="me-2"
        value={search}
        style={{minWidth:'300px'}}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="primary" type="submit">Search</Button>
    </Form.Group>
  </Form>
  
  )
}

export default Search