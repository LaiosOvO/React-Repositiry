import request from "../http/request";
import "../mock"
import {mock} from "mockjs";

export const refreshToken = () =>{

     request.get('/auth/refreshToken')
        .then( res=>{
            console.log(res)
            return res;
        })

    return null;
}


export const mockget = ()=>{
    return request.get("/get",{
        params:{
            encryFlag:false
        }
    })
}

export const mockUser = ()=>{
    const baseURL = "http://localhost:8989/api";

    mock(baseURL+"/data/list","get",{
        "code":200,
        "data|3-5":{
            "id|+1":1,
            "name":"@cname",
            "city":"@city",
        }
    })


    return request.get("/data/list",{
        params:{
            encryFlag:false
        }
    })
}


export const mockpost = (data:object)=>{
    return request.post("/post",data)
}