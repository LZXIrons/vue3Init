// import QS from 'qs' // 引入qs模块，用来序列化post类型的数据
// import mpAdapter from 'axios-miniprogram-adapter'
// import $Func from './function.js'
// import $Tips from './tip'
// axios.defaults.adapter = mpAdapter

import axios, { AxiosRequestConfig } from 'axios'
import type { RequestOptions } from '@/type/axios'
import { Toast } from 'vant'
import { formatTime } from '@/utils/methods/format'
import MD5 from '@/utils/methods/md5'
const API_BASE_URL = ''
const axiosInstance = axios.create({
	// baseURL: 'https://easy-mock.com', //api基本路径
	baseURL: API_BASE_URL,
	timeout: 10000, // 如果请求话费了超过 `timeout` 的时间，请求将被中断
	headers: {
		// `headers` 是即将被发送的自定义请求头
		'Content-Type': 'application/x-www-form-urlencoded'
	}
})

// 请求拦截器
axiosInstance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// 发送请求之前你可以在这里对config做一些事情
		console.log('请求被拦截到了，加点料', config)
		const reqTime = formatTime(new Date())
		const hash = 'retire_' + new Date().getFullYear() + ':' + reqTime
		config.headers!.reqTime = reqTime
		config.headers!.sign = MD5(hash) //数据加密
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
		// Do something with response data
		return response.data
	},
	error => {
		// Do something with response error
		return Promise.reject(error)
	}
)
const $http = async (options: RequestOptions) => {
	let wxRequest, data, config
	console.log(options)
	if (options.isLoad) {
		Toast.loading({
			message: '加载中...',
			duration: 0,
			forbidClick: true
		})
	}
	if (options.method == 'GET') {
		wxRequest = axiosInstance.get(options.url, options.params) //axios的get写法
	} else if (options.method == 'POST') {
		if (options.params) {
			data = options.params.query
			config = options.params.config
		}
		// wxRequest = axiosInstance.post(options.url,QS.stringify(data),config); //axios的post写法
		wxRequest = axiosInstance.post(options.url, data, config) //axios的post写法
	}

	const res = await new Promise((resolve, reject) => {
		wxRequest
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				Toast(err)
				reject(err.data)
			})
	})
	if (options.isLoad) {
		Toast.loading({
			message: '加载中...',
			duration: 500,
			forbidClick: true
		})
	}
	return res
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const $get = (url: string, params?: Record<string, unknown>, isLoad = true) => {
	return $http({
		params,
		url,
		isLoad,
		method: 'GET'
	})
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const $post = (
	url: string,
	params?: Record<string, unknown>,
	isLoad = true
) => {
	return $http({
		params,
		url,
		isLoad,
		method: 'POST'
	})
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
export { $post, $get, $all, $catchError, $requestCancel }
