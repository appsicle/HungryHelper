import Vue from 'vue';
import Router from 'vue-router'


import Display from './components/Display.vue'
import Input from './components/Input.vue'

Vue.use(Router);

export const routes = [
    {
        path: '/recipes',
        component: Display
    },
    {
        path: '/',
        component: Input
    }
]