import {createRouter, createWebHistory} from 'vue-router'
import {defineAsyncComponent} from "vue";

import HomeView from '../pages/Home.vue'
import AboutView from '../pages/AboutSchool.vue'
import NewsView from '../pages/News.vue'
import TeacherView from '../pages/Teachers.vue'
import ContactView from '../pages/Contact.vue'
import ManagementView from "../pages/Management.vue"
import IBView from '../pages/IB.vue'
import LoginView from '../pages/AdminLogin.vue'
import SchoolView from '../pages/SchoolMembersStatistics.vue'
import SchoolNewsView from '../pages/SchoolNewsStatistics.vue'


const ifAuthorized = (to,from,next)=>{
    if(localStorage.getItem('token') !== null){
        next()
    }
    else{
        next('/admin')
    }
}


const routes = [
    {
        path: '/',
        component: HomeView,
        meta: {layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))}
    },
    {
        path: '/about',
        component: AboutView,
        meta: {layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))}
    },
    {
        path: '/management',
        component: ManagementView,
        meta: {layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))}
    },
    {
        path: '/teachers',
        component: TeacherView,
        meta: {layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))}
    },
    {
        path: '/news',
        component: NewsView,
        meta: {layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))}
    },
    {
        path: '/contact',
        component: ContactView,
        meta: {layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))}
    },
    {
        path: '/ib',
        component: IBView,
        meta: {layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))}
    },
    {
        path: '/admin',
        component: LoginView,
        meta: {layout: defineAsyncComponent(() => import('@/layouts/BlankLayout.vue'))}
    },
    {
        path: '/statistics',
        component: SchoolView,
        meta: {layout: defineAsyncComponent(() => import('@/layouts/MainBlankLayout.vue'))},
        beforeEnter:ifAuthorized
    },
    {
        path: '/statistics/news',
        component: SchoolNewsView,
        meta: {layout: defineAsyncComponent(() => import('@/layouts/MainBlankLayout.vue'))},
        beforeEnter:ifAuthorized
    },

]

export default createRouter({
    history: createWebHistory(),
    routes
})