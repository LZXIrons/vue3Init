import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import 'lib-flexible'
import '@/assets/css/reset.css'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
// 加载 svg 图标
import 'virtual:svg-icons-register'
const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
