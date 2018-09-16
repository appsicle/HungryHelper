import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './store'
import Router from 'vue-router';
import {routes} from './routes';

import {
    Vuetify, // required
    VApp, // required
    VNavigationDrawer,
    VFooter,
    VTextarea,
    VGrid,
    VToolbar,
    VTextField,
    VJumbotron,
    VDivider,
    VBtn,
    VInput,
    VExpansionPanel,
    VCard,
    transitions
} from 'vuetify'


Vue.config.productionTip = false

require('vuetify/src/stylus/app.styl');

Vue.use(Vuex);
Vue.use(Vuetify, {
    components: {
        VApp,
        VJumbotron,
        VDivider,
        VGrid,
        VNavigationDrawer,
        VFooter,
        VToolbar,
        VTextarea,
        VExpansionPanel,
        VTextField,
        VCard,
        VBtn,
        VInput,
        transitions
    }
})


Vue.use(VueResource);


const router = new Router({
    mode: 'history',
    routes
});

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
