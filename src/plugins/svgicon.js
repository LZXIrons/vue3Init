import * as components from '@element-plus/icons-vue'
export default {
	install: app => {
		console.log(app.component)
		for (const key in components) {
			const componentConfig = components[key]
			app.component(componentConfig.name, componentConfig)
		}
	}
}
