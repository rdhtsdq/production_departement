import axios from "axios";
import token from './LocalToken'


let instance = axios.create({
  withCredentials:true,
  baseURL : "http://127.0.0.1:8000/api"
})

instance.interceptors.request.use((request) => {
  request.headers.common["Accept"] = "application/json";
  request.headers.common["Content-Type"] = "application/json";
  request.headers.common["X-Requested-With"] = "XMLHttpRequest";
  request.headers.common["Authorization"] = 'Bearer '+token
  return request;
});

export default instance
