/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import type { Plugin } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import windiCSS from 'vite-plugin-windicss'
import { ConfigSvgIconsPlugin } from './svgIcons'
import { AutoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'
import { ConfigMockPlugin } from './mock'
import { ConfigVisualizerConfig } from './visualizer'
import { ConfigCompressPlugin } from './compress'
import { ConfigPagesPlugin } from './pages'
import { ConfigMarkDownPlugin } from './markdown'
import { ConfigRestartPlugin } from './restart'
import {
	ViteWeappTailwindcssPlugin as vwt,
	postcssWeappTailwindcssRename
} from 'weapp-tailwindcss-webpack-plugin'

export function createVitePlugins(viteEnv: ViteEnvConfig, isBuild: boolean) {
	const { VITE_LEGACY } = viteEnv
	const vitePlugins: (Plugin | Plugin[])[] = [
		// vue支持
		uni(),
		vwt(),
		postcssWeappTailwindcssRename(),
		// JSX支持
		vueJsx(),
		// // 自动按需引入组件
		AutoRegistryComponents(),
		// // 自动按需引入依赖
		AutoImportDeps(),
		// 自动生成路由
		// ConfigPagesPlugin(),
		// 开启.gz压缩  rollup-plugin-gzip
		ConfigCompressPlugin(),
		//支持markdown
		ConfigMarkDownPlugin(),
		// 监听配置文件改动重启
		ConfigRestartPlugin()
	]
	// @vitejs/plugin-legacy
	// VITE_LEGACY && isBuild && vitePlugins.push(legacy())
	// vite-plugin-windicss
	vitePlugins.push(windiCSS())

	// vite-plugin-svg-icons
	vitePlugins.push(ConfigSvgIconsPlugin(isBuild))

	// vite-plugin-mock
	vitePlugins.push(ConfigMockPlugin(isBuild))

	// rollup-plugin-visualizer
	// vitePlugins.push(ConfigVisualizerConfig())

	return vitePlugins
}
