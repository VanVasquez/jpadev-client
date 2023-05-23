import axios from 'axios'


let BASE_URL 
if(process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://jpadev-server.vercel.app/api/v1'
}
else {
  BASE_URL = 'http://localhost:1000/api/v1'
}

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json' 
  },
  withCredentials: true
}) 

