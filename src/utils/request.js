/*
 * @Author: billy
 * @Date: 2022-12-18 19:02:53
 * @LastEditors: billy
 * @LastEditTime: 2022-12-28 11:04:53
 * @Description: 
 * Copyright (c) 2022 by billy, All Rights Reserved. 
 */
import axios from 'axios'
import { Message } from 'element-ui';

const request = axios.create({
    timeout: 30000
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Authorization'] = 'Bearer ' + process.env.VUE_APP_PENAI_API_KEY
    config.headers['OpenAI-Organization'] = 'org-8cg2CDKWyaetLYDPk7FNj7JP';
    // config.headers['token'] = user.token;  // 设置请求头
    return config
}, error => {
    return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        Message({ message: error, type: 'error', duration: 5 * 1000 })
        return Promise.reject(error)
    }
)


export default request