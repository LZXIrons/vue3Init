// import QS from 'qs' // 引入qs模块，用来序列化post类型的数据
// import mpAdapter from 'axios-miniprogram-adapter'
// import $Func from './function.js'
// import $Tips from './tip'
// axios.defaults.adapter = mpAdapter
// import { $post } from '@/utils/libs/test'
// import type { RequestOptions } from '#/axios'
import signUtils from '@/utils/libs/gatewaySign'
import axios, { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'
import { TOKENID } from '@config/constant'
import { Toast } from 'vant'
import { formatTime } from '@/utils/methods/format'
import MD5 from '@/utils/methods/md5'
const API_BASE_URL = ''
// 请求列表(防重复提交)
const pending: Array<any> = [] //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const cancelToken = axios.CancelToken
const axiosInstance = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000, // 如果请求话费了超过 `timeout` 的时间，请求将被中断
	headers: {
		// `headers` 是即将被发送的自定义请求头
		'Content-Type': 'application/x-www-form-urlencoded'
	}
})

const removePending = config => {
	for (const p in pending) {
		if (pending[p].u === config.url + '&' + config.method) {
			//当当前请求在数组中存在时执行函数体
			pending[p].f() //执行取消操作
			pending.splice(Number(p), 1) //把这条记录从数组中移除
		}
	}
}

// 请求拦截器
axiosInstance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// 发送请求之前你可以在这里对config做一些事情
		console.log('请求被拦截到了，加点料', config)
		let contentType
		const reqTime = formatTime(new Date())
		const hash = 'retire_' + new Date().getFullYear() + ':' + reqTime
		const _isGetMethod = config.method === 'get'
		if (_isGetMethod) {
			contentType = 'application/x-www-form-urlencoded;charset=UTF-8'
		} else {
			contentType = 'application/json;charset=UTF-8'
		}

		removePending(config) //在一个ajax发送前执行一下取消操作
		config.cancelToken = new cancelToken(c => {
			pending.push({ u: config.url + '&' + config.method, f: c })
		})
		config.headers = Object.assign({}, config.headers, {
			reqTime,
			sign: MD5(hash),
			contentType
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
	},
	error => {
		// Do something with request error
		return Promise.reject(error)
	}
)

// 添加一个响应拦截器
axiosInstance.interceptors.response.use(
	response => {
		console.log('拦截到响应数据了，我过滤下,过滤前的数据：', response)
		removePending(response.config) //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
		return Promise.resolve(response.data)
		// return response.data
	},
	error => {
		// Do something with response error
		//置空请求列表
		pending.length = 0
		return Promise.resolve({
			data: {
				success: false,
				msg: typeof error === 'string' ? error : error.message
			}
		})
		// return Promise.reject(error)
	}
)
const $http = <T>(
	config: AxiosRequestConfig,
	options: RequestOptions
): Promise<T> => {
	console.log('options', options)
	if (options.isLoad) {
		Toast.loading({
			message: '加载中...',
			duration: 0,
			forbidClick: true
		})
	}
	return new Promise((resolve, reject) => {
		axiosInstance
			.request(config)
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				Toast(err)
				reject(err.data)
			})
		if (options.isLoad) {
			Toast.loading({
				message: '加载中...',
				duration: 500,
				forbidClick: true
			})
		}
	})
}

const $get = <T>(
	config: AxiosRequestConfig,
	options: RequestOptions
): Promise<T> => {
	return $http({ ...config, method: 'GET' }, options)
}

const $post = <T>(
	config: AxiosRequestConfig,
	options: RequestOptions
): Promise<T> => {
	return $http({ ...config, method: 'POST' }, options)
}
const $put = <T>(
	config: AxiosRequestConfig,
	options: RequestOptions
): Promise<T> => {
	return $http({ ...config, method: 'PUT' }, options)
}
const $delete = <T>(
	config: AxiosRequestConfig,
	options: RequestOptions
): Promise<T> => {
	return $http({ ...config, method: 'DELETE' }, options)
}

// 多个接口迸发调用后统一处理数据
const $all = (params: Record<string, unknown>, url: string) => {
	axios
		.all([
			axios.get('https://api.github.com/users/mzabriskie'),
			axios.get('https://api.github.com/users/mzabriskie/orgs')
		])
		.then(
			axios.spread(function (user, orgs) {
				// console.log('接口1数据:', user.data.avatar_url, user.data.name)
				// console.log('接口2数据:', orgs.data)
			})
		)
}
// 错误捕获
const $catchError = (params: Record<string, unknown>, url: string) => {
	axios
		.post(
			'https://easy-mock.com/mock/5be12b95f7aed41684f2daea/axiosTest/getPersonByPost22'
		)
		.then(resp => {
			console.log('Post请求成功:', resp)
		})
		.catch(({ message, name, config, code, stack, request, response }) => {
			console.log(
				`捕获到了异常：${message}\n ${name} \n ${config} \n ${code}\n`,
				request,
				response
			)
		})
}

// 请求取消
const $requestCancel = (params: Record<string, unknown>, url: string) => {
	const CancelToken = axios.CancelToken
	let cancel
	axios
		.get(
			'https://easy-mock.com/mock/5be12b95f7aed41684f2daea/axiosTest/getPersonByGet',
			{
				cancelToken: new CancelToken(function executor(c) {
					// An executor function receives a cancel function as a parameter
					cancel = c
				})
			}
		)
		.catch(error => {
			if (axios.isCancel(error)) {
				console.log('自己取消了请求', error)
			}
		})
	// cancel the request
	cancel('取消请求')
}
export { $post, $get, $put, $delete, $all, $catchError, $requestCancel }
