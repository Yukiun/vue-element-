import Vue from 'vue'
import Vuex from 'vuex'
import shishen from 'modules/shishen'

Vue.use(Vuex)


const getters = {}
const actions = {}
export default new Vuex.Store({
    state,
    getters,
    actions,
    modules: {
        shishen
    }
});

