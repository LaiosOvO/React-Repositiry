import type { InternalAxiosRequestConfig } from "axios";
import {store} from "@/redux";

import { useMessage } from '/@/hooks/message'
import {codeMessage, HttpEnum} from "../../enum/http";
import {RequestConfig} from "./types";
const { useErrorMsg } = useMessage()

/**
 * 本文件用于增强axios实例
 */

export function OptimizeData(config:RequestConfig){
    let { data,method } = config;

    if( method == 'get' || method == 'delete' ){

    } else {

    }


    return config;
}


// request 拦截器
export function RequestBefore( req:InternalAxiosRequestConfig ){

    const token = store.getState().user.token;
    if(!token){
        req.headers.token = token;
    }

    return req;
}

// response 拦截器
export function ResponseSuccess( res:any ){
    const { code  } = res.data;

    switch (code){
        case HttpEnum.OVERDUE:
            useErrorMsg('登陆超时,请重新登录!')
            break;

        case HttpEnum.TIMEOUT:
            useErrorMsg('接口请求超时,请刷新页面重试!')
            break;
    }
}

export function ResponseFailure(e:any){
    const { code  } = e.res.data;

    const msg:string = codeMessage[code] || "this request have some problem"
    useErrorMsg(msg)

    return e;
}


const filterNullParams = ( params: any )=>{
    // 如果这些条件有一个符合 --> 那么则执行 && 删除这个
    Object.keys( params ).filter(
        (key) => ( params[key] === '' || params[key] === undefined || params[key] === null
        && delete params[key]
        )
    )

    return params;
}
