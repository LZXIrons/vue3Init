import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { testStore } from './store'
import { createPinia } from 'pinia'
import vant from 'vant'

// import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'
import 'vant/lib/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/dist/index.css'
import * as ElementIcons from '@element-plus/icons-vue'
// 将 element-plus 的图标库注册到全局

import 'lib-flexible'
import '@/assets/css/reset.css'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
// 加载 svg 图标
import 'virtual:svg-icons-register'
const app = createApp(App)
for (const key in ElementIcons) {
	app.component(`ElIcon${ElementIcons[key].name}`, ElementIcons[key])
}
app
	.use(createPinia())
	.use(testStore)
	.use(router)
	.use(ElementPlus)
	.use(vant)
	.mount('#app')
// app.use(window.Vuex).use(window.VueRouter).use(window.vant).mount('#app')
