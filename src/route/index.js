import { createRouter, createWebHistory } from 'vue-router'
// Import your components
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Service from '@/views/Service.vue'
import WhyUs from '@/views/WhyUs.vue'
import Team from '@/views/Team.vue'
import RegistrationForm from '@/views/RegistrationForm.vue'
import Users from '@/views/Users.vue'
import Login from '@/views/Login.vue'
import SingUp from '@/views/SingUp.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Service },
    { path: '/why-us', component: WhyUs },
    { path: '/team', component: Team},
    { path: '/register', component: RegistrationForm},
    { path: '/user', component: Users},
    { path: '/login', component: Login},
    { path: '/sing-up', component: SingUp},
    { path: '/:pathMatch(.*)*', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router