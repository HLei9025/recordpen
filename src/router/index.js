import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/home',
        children: [
            {
                path: 'mine',
                component: ()=>import('../pages/mine/Mine')
            },
            {
                path: 'search',
                component: ()=>import('../pages/search/Search')
            },
            {
                path: 'calendar',
                component: ()=>import('../pages/calendar/Calendar')
            },
            {
                path: 'addnote',
                component: ()=>import('../pages/addNote/AddNote'),
                children: [
                    {
                        path: 'writenote',
                        component: ()=>import('../pages/addNote/WriteNote')
                    }
                ]
            }
        ]
    }
]

export default new Router({
    mode: 'history',
    routes
})