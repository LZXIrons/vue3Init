import { BaseResponse, BaseAjax } from '@/entity/BaseApi'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import signUtils from '@/utils/libs/gatewaySign'
import Cookies from 'js-cookie'
import { TOKENID } from '@/constant'
import { Toast } from 'vant'
// 接口前缀
const BASE_URL = '' // '/rigPortal'
// 请求列表(防重复提交)
const requestList: Array<string> = []
const cancelToken = axios.CancelToken
// axios 配置实例
const getAxiosInstance = (): AxiosInstance => {
	const instance: AxiosInstance = axios.create({
		baseURL: BASE_URL
	})

	instance.interceptors.request.use(config => {
		const _isGetMethod = config.method === 'get'
		let _contentType = ''
		if (_isGetMethod) {
			config.data = true
		}

		if (_isGetMethod) {
			_contentType = 'application/x-www-form-urlencoded;charset=UTF-8'
		} else {
			_contentType =
				config.headers.form === Number(1)
					? 'application/x-www-form-urlencoded;charset=UTF-8'
					: 'application/json;charset=UTF-8'
		}
		if (config.headers.once === 1) {
			//防止重复提交（如果本次是重复操作，则取消，否则将该操作标记到requestList中）
			config.cancelToken = new cancelToken(cancel => {
				const requestFlag =
					JSON.stringify(config.url) +
					JSON.stringify(config.data) +
					'&' +
					config.method
				if (requestList.includes(requestFlag)) {
					//请求标记已经存在，则取消本次请求，否则在请求列表中加入请求标记
					cancel() //取消本次请求
				} else {
					requestList.push(requestFlag)
				}
			})
		}

		config.headers = Object.assign(config.headers, {
			'content-type': _contentType
		})
		const tokenId = Cookies.get(TOKENID) || ''
		// gateway - 走网关的接口
		if (config.headers.gateway) {
			if (tokenId) {
				config.headers['wb-token'] = tokenId
			}
			config = signUtils(config)
		}
		return config
	})

	instance.interceptors.response.use(
		response => {
			const requestFlag =
				JSON.stringify(response.config.url) +
				JSON.stringify(response.config.data) +
				'&' +
				response.config.method
			requestList.splice(
				requestList.findIndex(item => item === requestFlag),
				1
			)

			// if (response.data && response.data.info.error) {
			//   switch (response.data.info.error) {
			//     // 1100过期
			//     case 1110:
			//       postMessage('overTime', true)
			//       return Promise.reject(response)
			//   }
			// }
			// celnoos.log(response)
			return Promise.resolve(response)
		},
		error => {
			//置空请求列表
			requestList.length = 0
			return Promise.resolve({
				data: {
					success: false,
					msg: typeof error === 'string' ? error : error.message
				}
			})
		}
	)
	return instance
}

const getAxios = () => {
	const instance: AxiosInstance = getAxiosInstance()
	const request = <T>(config: AxiosRequestConfig): Promise<T> => {
		return new Promise((resolve, reject) => {
			instance.request<BaseResponse<T>>(config).then(async res => {
				const _data: any = res.data
				const { data, info = {} } = _data
				// info.error === 0 || info.error === undefined
				if (!info.error) {
					if (!data) {
						resolve(null as any)
					} else {
						resolve(_data.data)
					}
				} else {
					Toast(info.message || '服务器开小差')
					reject(info.message || '未知错误')
				}
			})
		})
	}
	const Ajax: BaseAjax = {
		get: function <T>(url: string, config: object): Promise<T> {
			return request<T>({
				...config,
				method: 'GET',
				url
			})
		},
		post: function <T>(
			url: string,
			data: object | string | undefined,
			config = {}
		): Promise<T> {
			return request<T>({
				...config,
				method: 'POST',
				url,
				data
			})
		}
	}
	return Ajax
}
export const Ajax: BaseAjax = getAxios()
export default getAxios
