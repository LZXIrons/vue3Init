/**
 * @name createHtmlPlugin
 * @description 支持ESM编译的CDN
 */
import type { PluginOption } from 'vite';
import {createHtmlPlugin} from 'vite-plugin-html'

// import { injectHtml } from 'vite-plugin-html'
// import { APP_TITLE } from '@config/constant'
import { APP_TITLE, CDN } from '../../constant'

export function configHtmlPlugin(env: ViteEnv, isBuild: boolean){

	const configHtmlPlugin : PluginOption[] = createHtmlPlugin({
		inject: {
			data: {
				cdnCss: isBuild ? CDN.css : [],
				cdnJs: isBuild ? CDN.js : [],
				appEnv: isBuild ? 'pro' : 'dev',
				title: APP_TITLE
			}
		}
	})
	return configHtmlPlugin
}

