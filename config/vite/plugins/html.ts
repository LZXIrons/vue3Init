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
					js: []
				},
				appEnv: isBuild ? 'pro' : 'dev',
				title: APP_TITLE
			}
		}
	})
}
