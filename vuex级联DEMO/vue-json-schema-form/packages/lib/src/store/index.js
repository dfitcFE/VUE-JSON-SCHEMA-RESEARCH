import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
    },
    mutations: {
        edit(state, payload) {
            // 拿到名称
            const selectTagName = Object.keys(payload.newValue)
            selectTagName.map((item) => {
                if (payload.$props.schema.properties[item].type === 'testSelect' && state[item] !== payload.newValue[item]) {
                    console.log('tri:::', payload.$props.schema.properties[item]['tri'])
                    payload.$props.schema.properties[item]['tri'].map((i)=>{
                        // 防止错误名称的组件引起进行下面的操作，从而引起报错
                        if (payload.newValue.hasOwnProperty(i)) {
                            return new Promise((resolve, reject) => {
                                payload.$props.schema.properties[i]['config']['params'] = payload.newValue
                                resolve()
                            })
                        }
                    })
                    Object.assign(state, payload.newValue[item])
                }
            })
        }
    },
    getters: {
        nameInfo(state) {
        },
        fullInfo(state, getters) {
            return getters.nameInfo
        }
    },
    actions: {
        aEdit(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve()
                }, 2000)
            })
        },
        editSelect(context, payload) {
            return new Promise((resolve, reject) => {
                context.commit('edit', payload)
                resolve()
            })
        }
    },
    modules: {
    }
})

export default store
