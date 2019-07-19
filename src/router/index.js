import Vue from 'vue'
import Router from 'vue-router'

import layout from '../pages/layout'

Vue.use(Router)

const routes = [
    {
        path: '*',
        redirect: '/yys'
    },
    {
        path: '/yys',
        component: layout
    }
]

const routerConfig = {
    mode: 'history',
    linkActiveClass: 'active',
    routes: routes
}

export default new Router(routerConfig)
