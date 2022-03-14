/**
 * @name createHtmlPlugin
 * @description 支持ESM编译的CDN
 */
import createHtmlPlugin from 'vite-plugin-html'

// import { injectHtml } from 'vite-plugin-html'
// import { APP_TITLE } from '@config/constant'
import { APP_TITLE } from '../../constant'

export const configHtmlPlugin = (Env: ViteEnv, isBuild: boolean) => {
	const { VITE_GLOB_APP_TITLE } = Env
	return createHtmlPlugin({
		inject: {
			data: {
				cdn: {
					js: [
						//cdn
						// 'https://cdn.jsdelivr.net/npm/vue@3.2.31/dist/vue.global.min.js',
						// 'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.min.js',
						// 'https://cdn.jsdelivr.net/npm/vue-demi@0.12.1/lib/index.iife.min.js',
						// 'https://cdn.jsdelivr.net/npm/pinia@2.0.11/dist/pinia.iife.min.js',
						// 'https://cdn.jsdelivr.net/npm/vue-router@4.0.13/dist/vue-router.global.prod.js',
						// // 'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.js',
						// 'https://cdn.jsdelivr.net/npm/vant@3.4.5/lib/vant.min.js'
						// 'https://cdn.jsdelivr.net/npm/axios@0.26.0/dist/axios.min.js'
						// 'https://cdn.jsdelivr.net/npm/vue@3.2.31/dist/vue.esm-browser.prod.js',
						// 'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.esm-browser.prod.js',
						// 'https://cdn.jsdelivr.net/npm/vue-router@4.0.13/dist/vue-router.esm-browser.js'
						// 'https://esm.sh/vue@2.5.2',
						// 'https://esm.sh/vuex@4.0.2',
						// 'https://esm.sh/vue-router@4.0.10'
					]
				},
				appEnv: isBuild ? 'pro' : 'dev',
				title: APP_TITLE
			}
		}
	})
	// return injectHtml({
	// 	injectData: {
	// 		cdn: {
	// 			js: [
	// 				//cdn
	// 				// 'https://cdn.jsdelivr.net/npm/vue@3.2.31/dist/vue.global.min.js',
	// 				// 'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.min.js',
	// 				// // 'https://cdn.jsdelivr.net/npm/pinia@2.0.11/dist/pinia.iife.min.js',
	// 				// 'https://cdn.jsdelivr.net/npm/vue-router@4.0.13/dist/vue-router.global.min.js',
	// 				// // 'https://cdn.jsdelivr.net/npm/ant-design-vue@2.2.0-beta.6/dist/antd.js',
	// 				// 'https://cdn.jsdelivr.net/npm/vant@3.4.5/lib/vant.min.js',
	// 				// 'https://cdn.jsdelivr.net/npm/axios@0.26.0/dist/axios.min.js'
	// 				'https://esm.sh/vue@2.5.2',
	// 				'https://esm.sh/vuex@4.0.2',
	// 				'https://esm.sh/vue-router@4.0.10'
	// 			]
	// 		},
	// 		appEnv: isBuild ? 'pro' : 'dev',
	// 		title: APP_TITLE
	// 	}
	// })
}
