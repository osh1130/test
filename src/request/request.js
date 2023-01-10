import axios from 'axios'

const axiosOption = {
    baseURL: '/api',
    timeout: 5000
}

// create the axios instance
const instance = axios.create(axiosOption);

// request interceptor
instance.interceptors.request.use(function (config) {
  let token = localStorage.getItem('cms-token')
  if(token){
    config.headers = {
      'cms-token': token
    }
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// response interceptor
instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default instance;
