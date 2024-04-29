
import axios from 'axios';

const http= axios.create({

  baseURL:  'http://localhost:7796/',
  headers: {
      "Content-type": "application/json",
  }
});

http.interceptors.request.use(
  config => {
      let token = localStorage.getItem('access_token');
      config.headers["x-access-token"] = token; 
      return config;
  },
  error => {
      return Promise.reject(error);
  }
);

http.interceptors.response.use(     
  (response) => {
      return response
  },
  (error) => {
      return new Promise((resolve, reject) => {
          const originalRequest = error.config
          const refreshToken = localStorage.getItem('token')
          if (error.response && error.response.status === 401) {
         
          }

          return reject(error)
      })
  },
)

export default http;