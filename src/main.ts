import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { testStore } from './store'
import { createPinia } from 'pinia'
import vant from 'vant'

// import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'
import 'vant/lib/index.css'

import 'lib-flexible'
import '@/assets/css/reset.css'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
const app = createApp(App)
// app.use(store).use(createPinia()).use(router).mount('#app')
app.use(createPinia()).use(testStore).use(router).use(vant).mount('#app')
// app.use(window.Vuex).use(window.VueRouter).use(window.vant).mount('#app')
