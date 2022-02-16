import { webView } from './util'
import { isUaApp } from '@/utils/methods'
/**
 *  调起app通用方法
 *  参数：{method: 方法名称, params: 参数, success: 成功回调}
 *  调用：wbAppBridge({method: xxx, params: xxx, success: ()=>{}})
 *
 */
export const wbAppBridge = ({
	method = '',
	params = '',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	success = () => {}
}: any) => {
	webView((bridge: any) => {
		bridge.callHandler(method, params, (data: any) => {
			success(data)
		})
	})
}

// 返回 APP 访问 webview 前的那个页面
export const wbAppHistoryBack = () => {
	// 如果是在app 环境内才生效
	if (isUaApp()) {
		return new Promise(rs => {
			wbAppBridge({
				method: 'wbApp-historyBack',
				params: '',
				success: rs
			})
		})
	} else {
		return Promise.reject('调用bridge 失败，请在app 内调用')
	}
}

// 	跳转到 APP 首页
export const wbAppToHome = () => {
	// 如果是在app 环境内才生效
	if (isUaApp()) {
		return new Promise(rs => {
			wbAppBridge({
				method: 'wbApp-toHome',
				success: rs
			})
		})
	} else {
		return Promise.reject('调用bridge 失败，请在app 内调用')
	}
}

// 文档地址：http://confluence.wbiaotest.cn/pages/viewpage.action?pageId=66135
// 网页调用app 方法的聚合类
export class WbAppToAppFunction {
	// 更新token
	static shareTokenInfo(params: any): Promise<any> {
		if (isUaApp()) {
			return new Promise(rs => {
				wbAppBridge({
					params,
					method: 'wbApp-toAppFunction',
					success: rs
				})
			})
		} else {
			return Promise.reject('调用bridge 失败，请在app 内调用')
		}
	}

	// 	跳转到 APP 首页
	static wbAppToHome(): Promise<any> {
		return wbAppToHome()
	}
	// 返回 APP 访问 webview 前的那个页面
	static wbAppHistoryBack(): Promise<any> {
		return wbAppHistoryBack()
	}
	static wbAppToLogin(): Promise<any> {
		return new Promise((rs, reject) => {
			if (isUaApp()) {
				wbAppBridge({
					method: 'wbApp-toLogin',
					params: '',
					success: rs
				})
			} else {
				reject('调用bridge 失败，请在app 内调用')
			}
		})
	}

	static wbAppToOutLogin(): Promise<any> {
		return new Promise((rs, reject) => {
			if (isUaApp()) {
				wbAppBridge({
					method: 'wbApp-toOutLogin',
					params: '',
					success: rs
				})
			} else {
				reject('调用bridge 失败，请在app 内调用')
			}
		})
	}
}
