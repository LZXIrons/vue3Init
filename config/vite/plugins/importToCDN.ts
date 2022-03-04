/**
 * @name importToCDNPRO
 * @description 开启.gz压缩
 *
 */
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

export const importToCDNPRO = () => {
	return importToCDN({
		modules: [
			autoComplete('vue'),
			autoComplete('axios'),
			autoComplete('lodash'),
			{
				name: 'vue',
				var: 'Vue',
				path: 'https://cdn.jsdelivr.net/npm/vue@3.0.5/dist/vue.global.prod.js'
			},
			{
				name: 'vuex',
				var: 'Vuex',
				path: 'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.prod.js'
			},
			{
				name: 'ant-design-vue',
				var: 'antd',
				path: 'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.js',
				css: 'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.min.css'
			},
			{
				name: 'vue-router',
				var: 'VueRouter',
				path: 'https://cdn.jsdelivr.net/npm/vue-router@4.0.10/dist/vue-router.global.prod.js'
			}
		]
	})
}
