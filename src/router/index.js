import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect:'/screen'
    },
    {
        path: '/screen',
        name: 'screen',
        component: () => import(/* webpackChunkName: "about" */ '../views/screen/screen.vue')
    }
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router
