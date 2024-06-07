import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './route'
import i18n from './i18n'

const pinia = createPinia()//////////////////////////

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
