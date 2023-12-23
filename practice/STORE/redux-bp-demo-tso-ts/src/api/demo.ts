import request from "../http/request";
import "../mock"

export const refreshToken = () =>{

     request.get('/auth/refreshToken')
        .then( res=>{
            console.log(res)
            return res;
        })

    return null;
}


export const mockget = ()=>{

    request.get("/get")
        .then( res=>{
            console.log(res)
            return res;
        })

}