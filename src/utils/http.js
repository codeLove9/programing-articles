import axios from 'axios'
const http = axios.create({
  baseURL: 'https://www.escook.cn'
})
export default http
