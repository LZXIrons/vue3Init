import { defineConfig, ConfigEnv, loadEnv } from 'vite'
import { createVitePlugins } from './config/vite/plugins'
import commonjs from 'rollup-plugin-commonjs'
import externalGlobals from 'rollup-plugin-external-globals'

// 路径处理模块
import path from 'path'

function resovePath(paths: string) {
	// 如何 __dirname 找不到 需要 yarn add @types/node --save-dev
	return path.resolve(__dirname, paths)
}
const externals = {
	// vue: 'Vue',
	// 'vue-router': 'VueRouter',
	// vuex: 'Vuex'
	// pinia: 'pinia',
	// axios: 'axios',
	// 'element-ui': 'ELEMENT',
	// lodash: '_',
	// echarts: 'echarts',
	// 'v-charts': 'VeIndex',
	// qs: 'Qs',
	// 'ant-design-vue': 'antd',
	// vant: 'vant'
}
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => {
	const ViteEnv = loadEnv(mode, __dirname)
	const isBuild = command === 'build'
	console.log('ViteEnv.VITE_APP_RIG_API', ViteEnv)
	console.log('process', process.env.NODE_ENV)
	return {
		server: {
			host: '0.0.0.0',
			// open: true, // 是否打开浏览器
			port: 3001,
			proxy: {
				'/zhongzhengapi/rigPortal/': {
					target: ViteEnv.VITE_APP_RIG_API,
					changeOrigin: true,
					rewrite: path =>
						path.replace(/^\/zhongzhengapi\/rigPortal\//, '/rigPortal/')
				},
				'/mjwatchapi/rigPortal/': {
					target: ViteEnv.VITE_APP_RIG_API,
					changeOrigin: true,
					rewrite: path =>
						path.replace(/^\/mjwatchapi\/rigPortal\//, '/rigPortal/')
				},
				'/zhongzhengapi/manageapi/': {
					target: ViteEnv.VITE_APP_MANAGE_API,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/zhongzhengapi\/manageapi\//, '')
				},
				'^/api': {
					target: ViteEnv.VITE_APP_RIG_API,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		},
		plugins: createVitePlugins(ViteEnv, isBuild),
		resolve: {
			// 定义别名
			alias: {
				'@': resovePath('src'),
				'@components': resovePath('src/components'),
				'@config': resovePath('config/'),
				'@utils': resovePath('src/utils'),
				'@api': resovePath('src/api')
			}
		},
		css: {
			//css预处理
			preprocessorOptions: {
				less: {
					// modifyVars: generateModifyVars(),
					javascriptEnabled: true,
					// 这样就能全局使用 src/assets/styles/base.less 定义的 变量
					additionalData: `@import "${resovePath(
						'src/assets/less/base.less'
					)}";`
				},
				scss: {
					/*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
					additionalData:
						'@import "@/assets/scss/globalVariable.scss";@import "@/assets/scss/global.scss";'
				}
			}
		},
		build: {
			target: 'modules',
			outDir: 'dist', // 指定输出路径
			assetsDir: 'static', // 指定生成静态资源的存放路径
			minify: 'terser', // 混淆器,terser构建后文件体积更小
			sourcemap: false,
			terserOptions: {
				compress: {
					drop_console: true, // 生产环境移除console
					drop_debugger: true // 生产环境移除debugger
				}
			},
			rollupOptions: {
				external: Object.keys(externals),
				plugins: [commonjs(), externalGlobals(externals)],
				treeshake: false,
				output: {
					manualChunks(id) {
						if (id.includes('node_modules')) {
							return id
								.toString()
								.split('node_modules/')[1]
								.split('/')[0]
								.toString()
						}
					}
				}
			}
		},
		define: { 'process.env': {} },
		// 引入第三方配置
		optimizeDeps: {
			// include: [
			// 	'vue',
			// 	'vue-router',
			// 	'@vueuse/core'
			// 	// '@vueuse/head',
			// ],
			// exclude: ['vue-demi']
		}
	}
})
