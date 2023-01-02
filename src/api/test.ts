import { $post, $get } from '@/utils/libs/axios'
// import wxRequest from '../utils/wxRequest.js'
// import { proxyRigUrl } from '@config/constant'
// const proxyRigUrl = '/zhongzhengapi/rigPortal'
const proxyRigUrl = '/api'
//区域接口
export const findGoodsDetail = params =>
	$post(
		{ url: proxyRigUrl + '/goods/goodsInfo/findGoodsDetailInfo', params },
		{ isLoad: false }
	)
// export const findDetail = (params?: Record<string, unknown>) =>
// 	$post(proxyRigUrl + '/topic/detail', params, false)
export const wbApi = params =>
	$post(
		{
			// url: proxyRigUrl + '/wbshare/content/getSurveyorDataInfo',
			url: proxyRigUrl + '/artisan/shopDetail/v3/getShopDetail',
			data: params,
			headers: { gateway: true }
		},
		{ isLoad: false }
	)
