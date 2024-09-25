import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://todo-list-server.anantair.my.id'
})

export default instance
