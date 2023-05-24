import React, { useState, useEffect } from 'react';
import {  Dropdown, DropdownButton, ListGroup } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

interface Clients {
  client_id: number;
  first_name: string;
  last_name: string;
  email: string;
  contact: string;
  type: string;
  zip_code: string | null;
}

type ClientList = {
  data: Clients[];
};

type DisplayType = 'all' | 'organization' | 'individual';

const ClientsList: React.FC<ClientList> = ({ data }) => {
  const [displayType, setDisplayType] = useState<DisplayType>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<Clients[]>([]);
  const pageSize = 10; 
  const displayPages = 5; 
  useEffect(() => {
    const getClients = () => {
      const clients = data.filter(d => d.type === displayType);
      if (clients) {
        setCurrentData(clients);
      }  
    };
    if(displayType !== 'all')
      getClients();
    else {
      setCurrentData(data);
    } 
  }, [data, displayType]);
  
  
  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Get the data to display on the current page
  const currentPageData = currentData.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(currentData.length / pageSize);

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
    <div> 
      <DropdownButton id='dropdownbuton' title={displayType}>
        <Dropdown.Item onClick={() => setDisplayType('all')}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => setDisplayType('individual')}>Individual</Dropdown.Item>
        <Dropdown.Item onClick={() => setDisplayType('organization')}>Organization</Dropdown.Item>
      </DropdownButton>
      <ListGroup>
      {currentPageData.map((client) => (
        <ListGroup.Item key={client.client_id} action as={Link} to={`${client.client_id}`}>
          {client.first_name} {client.last_name}
        </ListGroup.Item>
      ))}
      </ListGroup> 
      <div className="d-flex justify-content-center">
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
      </div>
    </div>
  );
};

export default ClientsList;
