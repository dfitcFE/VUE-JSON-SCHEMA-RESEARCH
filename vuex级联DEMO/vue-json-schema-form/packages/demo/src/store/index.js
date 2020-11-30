import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: 'HelloVuex'
    },
    mutations: {
        edit(state) {
            state.name = 'jack'
        }
    },
    getters: {
        nameInfo(state) {
            return state.name
        },
        fullInfo(state, getters) {
            return getters.nameInfo
        }
    },
    actions: {
        /*aEdit(context, payload) {
            setTimeout(() => {
                console.log(payload);
                context.commit('edit', payload)
            }, 2000)
        }*/
        aEdit(context, payload) {
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    context.commit('edit', payload)
                    resolve()
                }, 2000)
            })
        }
    },
    modules: {
        a: {
            state: {
                age: 15
            },
            getters: {}
        },
        b: {
            state: {},
            getters: {}
        }
    }
})

export default store
