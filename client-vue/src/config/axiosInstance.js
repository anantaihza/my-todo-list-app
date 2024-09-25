import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'http://34.101.36.170'
})

export default instance
