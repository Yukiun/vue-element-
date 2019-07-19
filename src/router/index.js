import Vue from 'vue'
import Router from 'vue-router'

import layout from '../pages/layout'

Vue.use(Router)

const routerConfig = {
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/yys',
            component: layout,
            children: import('../components/yys')
        },
        {
            path: '/user',
            component: layout,
            children: import('../components/user/user')
        },
        {
            path: '/list',
            component: layout,
            children: import('../components/list')
        }
    ]
}
export default new Router()
