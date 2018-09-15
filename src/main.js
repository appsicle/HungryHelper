import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './store'
import {
    Vuetify, // required
    VApp, // required
    VNavigationDrawer,
    VFooter,
    VTextarea,
    VGrid,
    VToolbar,
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
        VGrid,
        VNavigationDrawer,
        VFooter,
        VToolbar,
        VTextarea,
        VExpansionPanel,
        VCard,
        VBtn,
        VInput,
        transitions
    }
})


Vue.use(VueResource);

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
