/**
 * @name createHtmlPlugin
 * @description 支持ESM编译的CDN
 */

import htmlConfig from 'vite-plugin-html-config'

export const configHtmlPlugin = () => {
	return htmlConfig({
		links: [
			{
				rel: 'stylesheet',
				href: 'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.min.css'
			}
		],
		headScripts: [
			`console.log('hi')` // 假设这是错误监控相关代码
		],
		scripts: [
			{
				src: 'https://cdn.jsdelivr.net/npm/vue@3.0.5/dist/vue.global.prod.js'
			},
			{
				src: 'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.prod.js'
			},
			{
				src: 'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.js'
			},
			{
				src: 'https://cdn.jsdelivr.net/npm/vue-router@4.0.10/dist/vue-router.global.prod.js'
			}
		]
	})
}
