import axios from 'axios'
import iview from 'iview'
import Vue from 'vue'
import WebStorageCache from 'web-storage-cache'
const wsCache=new WebStorageCache()
axios.interceptors.request.use(config=>{
    config.headers['x-access-token'] = (wsCache.get('token') || {});
    return config
},err=>{
    return Promise.reject(err)
})
axios.interceptors.response.use(config=>{
    return config;
},err=>{
    if(err.response.data.msg=="NOTLOGIN"||err.response.data.msg=="invalid token"){//登录过期
        wsCache.delete('token')
        let func=_=>{
            window.location.href="/admin/login"
        }
    }
    if(window.location.href!=='/admin/login'){
        iView.$Message.error(err.response.data.msg);
    }
    return Promise.reject(err);
})
axios.create({
    baseUrl:`http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
})
Vue.prototype.$axios=axios;