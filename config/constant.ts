/**
 * @name Config
 * @description 项目配置
 */

// 应用名
export const APP_TITLE = 'CloudMusic'

// 本地服务端口
export const VITE_PORT = 3000

// prefix
export const API_PREFIX = '/api'

// serve
export const API_BASE_URL = '/api'
export const API_TARGET_URL = 'http://localhost:3000'

// mock
export const MOCK_API_BASE_URL = '/mock/api'
export const MOCK_API_TARGET_URL = 'http://localhost:3000'

// iconfontUrl
export const ICONFONTURL = '//at.alicdn.com/t/font_3004192_9jmc1z9neiw.js' // 去色版

// 包依赖分析
export const ANALYSIS = true

// 是否支持Md渲染
export const MARKDOWN = true

// 代码压缩
export const COMPRESSION = true

// 删除 console
export const VITE_DROP_CONSOLE = true
export const TOKENID = 'wbiao.memberservice.tokenid'
export const WBIAOID = 'wbiaoid'

export class Properties {
	static tokenId = 'wb_sess'
	static userinfo = 'userinfo'
	static wbiaoid = 'wbiaoid'
	static TALENT_ID = 'talentId'
	static KEFU_ID = 'kfd'
	static WBIAOID = 'wbiaoid'
	static APP_SOURCE = 'app-source'
}

//cdn
export const CDN = {
	js: [
		'https://cdn.jsdelivr.net/npm/vue@3.2.45/index.mjs',
		'https://cdn.jsdelivr.net/npm/vue-router@4.0.14/dist/vue-router.global.prod.js',
		'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.prod.js',
		'https://cdn.jsdelivr.net/npm/vue-demi@0.12.1/lib/index.iife.min.js',
		'https://cdn.jsdelivr.net/npm/pinia@2.0.11/dist/pinia.iife.min.js'
	],
	css: ['https://cdn.jsdelivr.net/npm/element-plus/dist/index.css']
}
