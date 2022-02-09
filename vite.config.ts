import { defineConfig, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
// 路径处理模块
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
	return {
		server: {
			host: '0.0.0.0',
			open: true, // 是否打开浏览器
			port: 3000,
			proxy: {
				// '^/interface/': {
				// 	target: 'http://192.168.24.99:3000/',
				// 	changeOrigin: true,
				// 	rewrite: path => path.replace(/^\/interface/, '')
				// }
			}
		},
		plugins: [
			vue(),
			viteMockServe({
				supportTs: true,
				mockPath: 'mock',
				localEnabled: command === 'serve',
				watchFiles: true
			}),
			WindiCSS(),
			importToCDN({
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
		],
		resolve: {
			// alias: [
			// 	// @/xxxx => src/xxxx
			// 	{
			// 		find: /@\//,
			// 		replacement: pathResolve('src') + '/'
			// 	}
			// ]
			// 定义别名
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'@components': path.resolve(__dirname, 'src/components')
			}
		},
		css: {
			//css预处理
			preprocessorOptions: {
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
		// 引入第三方配置
		optimizeDeps: {
			include: []
		}
	}
})
