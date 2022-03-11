/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import windiCSS from 'vite-plugin-windicss'
import { configHtmlPlugin } from './html'
import { importToCDNPRO } from './importToCDN'
import { ConfigSvgIconsPlugin } from './svgIcons'
import { AutoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'
import { ConfigMockPlugin } from './mock'
import { ConfigVisualizerConfig } from './visualizer'
import { ConfigCompressPlugin } from './compress'
import { ConfigPagesPlugin } from './pages'
import { ConfigMarkDownPlugin } from './markdown'
import { ConfigRestartPlugin } from './restart'
import htmlPlugin from 'vite-plugin-html-config'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
	const { VITE_LEGACY } = viteEnv
	const vitePlugins: (Plugin | Plugin[])[] = [
		// vue支持
		vue(),
		// JSX支持
		vueJsx(),
		// 生产环境使用CDN
		importToCDNPRO(),
		// 自动按需引入组件
		AutoRegistryComponents(),
		// 自动按需引入依赖
		AutoImportDeps(),
		// 自动生成路由
		ConfigPagesPlugin(),
		// 开启.gz压缩  rollup-plugin-gzip
		ConfigCompressPlugin(),
		//支持markdown
		ConfigMarkDownPlugin(),
		// 监听配置文件改动重启
		ConfigRestartPlugin()
		// htmlPlugin({
		// 	links: [
		// 		{
		// 			rel: 'stylesheet',
		// 			href: 'https://cdn.jsdelivr.net/npm/cesium@1.90.0/Build/Cesium/Widgets/widgets.css'
		// 		}
		// 	],
		// 	scripts: [
		// 		{
		// 			src: 'https://cdn.jsdelivr.net/npm/vue@3.2.31/dist/vue.global.min.js'
		// 		},
		// 		{
		// 			src: 'https://cdn.jsdelivr.net/npm/vue-router@4.0.13/dist/vue-router.global.prod.js'
		// 		},
		// 		{
		// 			src: 'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.min.js'
		// 		}
		// 	]
		// 	// 字节cdn有问题
		// })
	]
	// @vitejs/plugin-legacy
	VITE_LEGACY && isBuild && vitePlugins.push(legacy())
	// vite-plugin-windicss
	vitePlugins.push(windiCSS())

	// vite-plugin-html
	// vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

	// vite-plugin-svg-icons
	vitePlugins.push(ConfigSvgIconsPlugin(isBuild))

	// vite-plugin-mock
	vitePlugins.push(ConfigMockPlugin(isBuild))

	// rollup-plugin-visualizer
	vitePlugins.push(ConfigVisualizerConfig())

	return vitePlugins
}
