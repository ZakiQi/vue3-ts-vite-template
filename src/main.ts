import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { pinia } from '@/store'
import 'mock/index'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router).use(pinia).use(pinia).use(ElementPlus)
app.mount('#app')

