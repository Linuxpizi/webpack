import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import myRoutes from './router/router.js';

Vue.use(VueRouter)

const router = new VueRouter({
    routes:myRoutes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
