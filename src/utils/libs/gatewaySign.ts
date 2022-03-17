import qs from 'qs'
import MD5 from '@/utils/methods/md5'
import { TOKENID } from '@config/constant'
import uuid from '../methods/uuid'
import { objKeySort } from '../methods/format'
import { AxiosRequestConfig } from 'axios'
import { CommonDataEntity } from '@/entity/GatewaySign'
const secret = import.meta.env.VITE_APP_SECRET_KEY
console.log('secret', secret)
export default (request: AxiosRequestConfig) => {
	const unixDate: number = Math.floor(Date.now() / 1000)
	// 公共参数
	// eslint-disable-next-line no-prototype-builtins
	const appData = {
		app: 2, // 应用  2.万表名匠
		os: 5 // 系统平台 5:mp（小程序）
	}
	const commonData: CommonDataEntity = Object.assign(
		{
			deviceId: uuid(),
			time: unixDate, // 时间戳
			rcode: Math.floor(Math.random() * 9999)
		},
		appData
	)
	// TOKENID
	// const needToken = { 'wb-token': '67505d34-c462-4874-81eb-cc7d210cc771' }
	const tokenID = uni.getStorageSync('tokenID')
	const needToken = tokenID
		? {
				'wb-token': tokenID || request.headers!['wb-token']
		  }
		: {}

	console.log(appData, commonData, needToken)
	/**
	 * [post - 验签]
	 * 1. commonData 里加入json.parse后的body参数，并且qs.stringify(不encode)
	 * 2. 对象升序排列，然后 MD5操作
	 * 3. 在url上拼接 body,time,sign
	 */
	if (request.method?.toUpperCase() === 'POST') {
		const sortObject = Object.assign({}, commonData, needToken, {
			body: JSON.stringify(request.data)
		})
		const signObject = objKeySort(sortObject)
		// console.log(signObject, secret)

		const signParams = `${qs.stringify(signObject, { encode: false })}${secret}`
		commonData.sign = MD5(signParams)
		// console.log(commonData)

		request.url = request.url + '?' + qs.stringify(commonData)
	}
	/**
	 * [get - 验签]
	 * 1. 对象升序排列，然后 MD5操作
	 * 2. 在url上拼接 body,time,sign
	 * 3. signHeader为真意味着header验签，header加入SignDate，Content-MD5，Version
	 */
	if (request.method?.toUpperCase() === 'GET') {
		const sortObject = Object.assign({}, commonData, needToken, request.params)
		const signObject = objKeySort(sortObject)
		const signParams = `${qs.stringify(signObject, { encode: true })}${secret}`
		commonData.sign = MD5(signParams)
		request.params = objKeySort({
			...commonData,
			...request.params
		})
	}
	return request
}
