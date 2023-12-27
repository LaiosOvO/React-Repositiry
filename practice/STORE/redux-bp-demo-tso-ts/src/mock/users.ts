import {mock} from "mockjs";

mock("/.*?\/users/","get",{

    "code":200,
    "data|3":[
        {
            "id|+1":1,
            "name": "@cname",
            "age|21-24":1,
            "addr":"@city(true)"
        }
    ],
    "msg":"成功"

})
