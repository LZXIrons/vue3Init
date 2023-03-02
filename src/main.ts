import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/utils/tool/extend'

import '@/assets/css/theme.scss'
import '@/assets/css/base.scss'

// 加载 svg 图标
import 'virtual:svg-icons-register'
const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
