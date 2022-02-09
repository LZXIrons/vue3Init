import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import '@/assets/css/reset.css'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
const app = createApp(App)
app.use(store).use(router).mount('#app')
