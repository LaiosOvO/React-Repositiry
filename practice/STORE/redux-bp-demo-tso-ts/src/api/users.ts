import request from "../http/request";


export function getUser(){
    return  request.get("/users")
}
