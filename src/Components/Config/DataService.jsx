import axios from "axios"


const BASE_URL = "http://16.171.8.215:3000/api/v1/"

const dataservice = axios.create({
    baseURL : BASE_URL
})

dataservice.interceptors.request.use(
    (config)=>{
        // const token = localStorage.getItem("token")
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvIjp7ImlkIjoiNjY3YThmOGZjNzM1ZGE0MDI1MGFiYWZlIiwiZGV2aWNlSWQiOiIiLCJyb2xlcyI6IkFETUlOIn0sImRhdGUiOjE3MTk0NjQ5NTc4NzQsImlhdCI6MTcxOTQ2NDk1NywiZXhwIjoxNzE5NTA4MTU3fQ.EBgWHCZ4vmhkdiUz0tpro1I_sCFiG9Y12xNIQZsQ-yM"

        config.headers.Authorization = `Bearer ${token}`
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
export default dataservice