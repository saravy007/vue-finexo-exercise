import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
// Import your components
import Home from './views/Home.vue'
import About from './views/About.vue'
import Service from './views/Service.vue'
import WhyUs from './views/WhyUs.vue'
import Team from './views/Team.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Service },
    { path: '/why-us', component: WhyUs },
    { path: '/team', component: Team }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
})

const app = createApp(App)
app.use(router)
app.mount('#app')
