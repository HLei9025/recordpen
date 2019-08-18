import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: ()=>import('../pages/home/Home'),
        children: [
            {
                path: 'mine',
                component: ()=>import('../pages/mine/Mine'),
                children: [
                    {
                        path: 'login',
                        component: ()=>import('../pages/mine/children/login')
                    }
                ]
            },
            {
                path: 'search',
                component: ()=>import('../pages/search/Search'),
                children: [
                    {
                        path: '/search_input',
                        component: ()=>import('../pages/search/SearchInput')
                    }
                ]
            },
            {
                path: 'calendar',
                component: ()=>import('../pages/calendar/Calendar')
            },
            {
                path: 'addnote',
                props:(route)=>{
                    console.log(route)
                    return{
                        color:route.hash
                    }
                },
                component: ()=>import('../pages/addNote/AddNote'),
                children: [
                    {
                        path: 'writenote',
                        component: ()=>import('../pages/addNote/WriteNote')
                    }
                ]
            }
        ]
    },
    {
        path: '/404',
        component: ()=>import('../pages/common/NotFind')
    },
    {
        path: '**',
        redirect: '/404'
    }
]

export default new Router({
    mode: 'history',
    routes
})