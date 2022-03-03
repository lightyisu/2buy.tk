import axios from 'axios';
const request=axios.create({
    baseURL:'http://localhost:8080/',
    timeout:4000
})
//拦截 后端信息缩减
request.interceptors.response.use(res=>{
   
    return res.data
})
export default request;