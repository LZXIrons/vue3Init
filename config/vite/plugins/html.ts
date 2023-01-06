/**
 * @name createHtmlPlugin
 * @description 支持ESM编译的CDN
 */
import createHtmlPlugin from 'vite-plugin-html'

// import { injectHtml } from 'vite-plugin-html'
// import { APP_TITLE } from '@config/constant'
import { APP_TITLE, CDN } from '../../constant'

export const configHtmlPlugin = (isBuild: boolean) => {
	return createHtmlPlugin({
		inject: {
			data: {
				cdnCss: isBuild ? CDN.css : [],
				cdnJs: isBuild ? CDN.js : [],
				appEnv: isBuild ? 'pro' : 'dev',
				title: APP_TITLE
			}
		}
	})
}
