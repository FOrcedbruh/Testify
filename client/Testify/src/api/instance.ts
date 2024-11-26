import axios from "axios";



const instance = axios.create({
    baseURL: "https://testify-server.onrender.com/",
    withCredentials: true
})


export { instance };