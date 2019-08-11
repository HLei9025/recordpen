import axios from 'axios'
import api from './api'

export const get = async (url, params={})=>{
    try {
        let response = await axios.get(url,{
            params: params,
            baseURL: api.HOST
        });
        if(response.status === 200){
            return response.data;
        }else{
            throw new Error();
        }
    } catch(error){
        console.log('请求失败');
    }
}

export const post = async (url,params={})=>{
    try {
        let response = await axios.post(url,params,{
            baseURL: api.HOST
        });
        if(response.status === 200){
            return response.data;
        }else{
            throw new Error();
        }
    } catch(error){
        console.log('请求失败');
    }
}