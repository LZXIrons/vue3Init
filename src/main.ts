import { createSSRApp } from 'vue'

import App from './App.vue'
import { testStore } from './store'
import { createPinia } from 'pinia'
// import uView from 'uview-ui'

import '@/assets/css/reset.css'
// import 'virtual:windi-base.css'
// import 'virtual:windi-components.css'
// import 'virtual:windi-utilities.css'

export function createApp() {
	const app = createSSRApp(App)
	app.use(createPinia()).use(testStore)
	return {
		app
	}
}
