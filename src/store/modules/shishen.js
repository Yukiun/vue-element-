import axios from 'axios'
import types from '../type'

const state = {
    shishen: []
}

const getters = {
    show(state) {
        return state.shishen
    }
}

const actions = {
    getShishen({commit, state}) {
        axios.get('/get/shishen').then(rsp => {
            if (rsp.data.error === 0) {
                commit(types.GET_SHISHEN, rsp.data.shishen)
            } else {
                console.log(`错误码${rsp.data.error},式神数据获取失败`)
            }
        })
    }
}

const mutations = {
    [types.GET_SHISHEN](state, data) {
        state.shishen = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
