/**
 * @name importToCDNPRO
 * @description
 *
 */
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

export const importToCDNPRO = () => {
	return importToCDN({
		modules: [
			// {
			// 	name: 'vue',
			// 	var: 'Vue',
			// 	path: 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.31/vue.global.prod.min.js'
			// },
			// {
			// 	name: 'vuex',
			// 	var: 'Vuex',
			// 	path: 'https://cdnjs.cloudflare.com/ajax/libs/vuex/4.0.2/vuex.global.prod.min.js'
			// },
			// {
			// 	name: 'vue-router',
			// 	var: 'VueRouter',
			// 	path: 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.0.12/vue-router.global.prod.min.js'
			// }
			autoComplete('axios'),
			autoComplete('lodash'),
			autoComplete('@vueuse/core'),
			{
				name: 'vue',
				var: 'Vue',
				path: 'https://cdn.jsdelivr.net/npm/vue@3.2.31/dist/vue.global.prod.js'
			},
			{
				name: 'vuex',
				var: 'Vuex',
				path: 'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.prod.js'
			},
			{
				name: 'pinia',
				var: 'pinia',
				path: 'https://cdn.jsdelivr.net/npm/pinia@2.0.11/dist/pinia.iife.prod.js'
			},
			// {
			// 	name: 'ant-design-vue',
			// 	var: 'antd',
			// 	path: 'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.js',
			// 	css: 'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.min.css'
			// },
			{
				name: 'vue-router',
				var: 'VueRouter',
				path: 'https://cdn.jsdelivr.net/npm/vue-router@4.0.13/dist/vue-router.global.prod.js'
			}
		]
	})
}
