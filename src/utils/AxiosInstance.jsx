import axios from "axios";

const yourAccessToken = localStorage.getItem('userEmail');

const instance  = axios.create({
    baseURL: 'https://eventmanagemet.onrender.com',
    headers: {
      'Authorization': `Bearer ${yourAccessToken}`,
      'Content-Type': 'application/json',
    },
})

export default instance