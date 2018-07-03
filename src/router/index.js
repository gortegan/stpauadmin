/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Images from '@/components/Images'
import Files from '@/components/Files'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/images',
        name: 'Images',
        component: Images,
        beforeEnter: (to, from, next) => {
            next('/login');
        }
    }, {
        path: '/files',
        name: 'Files',
        component: Files
    }, , {
        path: '/login',
        name: 'Login',
        component: Login
    }]
})