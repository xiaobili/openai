/*
 * @Author: billy
 * @Date: 2022-12-18 11:15:55
 * @LastEditors: billy
 * @LastEditTime: 2022-12-18 20:02:38
 * @Description: Open AI 请求
 * Copyright (c) 2022 by billy, All Rights Reserved. 
 */
import request from '@/utils/request'
export function queryOpenAI(query) {
    return request({
        url: '/completions',
        method: 'post',
        data: query
    })
}

export function listModels() {
    return request({
        url: '/models',
        method: 'get'
    })
}