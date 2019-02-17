import Vue from 'vue'
import Vuex from 'vuex'
import WebStorageCache from 'web-storage-cache'
Vue.use(Vuex)
const ws=new WebStorageCache();
const store =()=> new Vuex.Store({
    modules: {
        admin: {
            namespaced: true,
            state: {
                token: ws.get('token'),
                user: ws.get('user')
            },
            mutations: {
                setUser: (state, val) => {
                    state.user = val;
                    ws.set('user',val);
                },
                setToken: (state, val) => {
                    state.token = val;
                    ws.set('token',val);
                }
            },
            getters: {
                getUser: state =>state.user||ws.get('user'),
                getToken: state =>state.token||ws.get('token')
            },
        },
        front: {
            namespaced: true

        }
    }
})
export default store