import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import { message, notification } from "antd";
import {getToken} from '../utils/index'
import CryptoJS from 'crypto-js';


// 配置基础属性
const baseURL = "http://localhost:8989/api";
const config = {
    // baseURL: import.meta.env.VITE_APP_API, //.env中的VITE_APP_API参数
    baseURL: baseURL, //.env中的VITE_APP_API参数
    timeout: 10000, //超时时间
    withCredentials:true, // 是否携带cookie 发送跨域请求。默认 false
    headers: {

        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json;charset=utf-8',
    },
}

const codeMessage: { [key: number]: string } = {
    200: "服务器成功返回请求的数据。",
    201: "新建或修改数据成功。",
    202: "一个请求已经进入后台排队（异步任务）。",
    204: "删除数据成功。",
    400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
    401: "用户没有权限（令牌、用户名、密码错误）。",
    403: "用户得到授权，但是访问是被禁止的。",
    404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
    406: "请求的格式不可得。",
    410: "请求的资源被永久删除，且不会再得到的。",
    422: "当创建一个对象时，发生一个验证错误。",
    500: "服务器发生错误，请检查服务器。",
    502: "网关错误。",
    503: "服务不可用，服务器暂时过载或维护。",
    504: "网关超时。",
};
// 加密函数
function encrypt(data:object|string|number) {
    const secretKey = 'laios'; // 密钥，长度为16、24或32位
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    return ciphertext;
}

const service = axios.create( config );


export interface Response<T> {
    code: number;
    data:T;
    msg:string;
}

// 请求拦截器
// 实现增强部分 =
/*
* 1 防止重复提交
* 2 设置header参数 - token
* */
service.interceptors.request.use(
    function(config:InternalAxiosRequestConfig ){

        const token = getToken()
        config.headers["authorization"] = token
        // 进度条组件 NProgress.start();

        // 接口参数加密
        try{
            let encryFlag:boolean = false;
            if(config.method == 'post'){
                encryFlag = config.data.encryFlag;
            }else if (config.method == 'get'){
                encryFlag = config.params.encryFlag;
            }

            if(encryFlag){
                config.data = { data: encrypt(JSON.stringify(config.data)) }
            }
        }catch (error ) {
            console.log()
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

// 响应拦截器
/*
* 实现的增强部分
* 1 统一错误提示拦截
* */
service.interceptors.response.use(

    function (response:AxiosResponse) {
        // 对响应的状态码进行统一拦截请求
        // 可以使用 进度条组件 NProgress.done();
//        const  { data,status } = response



        message.success("请求成功")
        return response;
    } ,
    function (error:AxiosError){
        const { response } = error;

        if( response && response.status ){
            const status = response.status;
            const errorText = codeMessage[status] || response.statusText;


            switch (status){
                case 404:
                    notification.error({
                        message:"当前api没找到",
                        description: errorText
                    })
                    break;
                case 500:
                    message.error("服务器繁忙")
                    break;
                case 503:
                    message.error("当前api没有权限")
                    break;
            }

        }



        return Promise.reject(error);
    }

)

export default service;