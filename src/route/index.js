import { createRouter, createWebHistory } from 'vue-router'
// Import your components
//import Home from '@/views/Home.vue'
const Home = () => import('@/views/Home.vue')
// import About from '@/views/About.vue'
const About = () => import('@/views/About.vue')
// import Service from '@/views/Service.vue'
const Service = () => import('@/views/Service.vue')
// import WhyUs from '@/views/WhyUs.vue'
const WhyUs = () => import('@/views/WhyUs.vue')
// import Team from '@/views/Team.vue'
const Team = () => import('@/views/Team.vue')
// import RegistrationForm from '@/views/RegistrationForm.vue'
const RegistrationForm = () => import('@/views/RegistrationForm.vue')
// import Users from '@/views/Users.vue'
const Users = () => import('@/views/Users.vue')
// import Login from '@/views/Login.vue'
const Login = () => import('@/views/Login.vue')
// import SingUp from '@/views/SingUp.vue'
const SingUp = () => import('@/views/SingUp.vue')
// import NotFound from '@/views/NotFound.vue'
const NotFound = () => import('@/views/NotFound.vue')
//hello

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