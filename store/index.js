import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store =()=> new Vuex.Store({
    modules: {
        admin: {
            namespaced: true,
            state: {
                token: "",
                user: ""
            },
            mutations: {
                setUser: (state, val) => {
                    state.user = val;
                },
                setToken: (state, val) => {
                    state.token = val;
                }
            },
            getters: {
                getUser: state => state.user,
                getToken: state => state.token
            }

        },
        front: {
            namespaced: true

        }
    }

})
export default store