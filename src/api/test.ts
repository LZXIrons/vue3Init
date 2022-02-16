import { $post } from '@/utils/libs/test'
// import wxRequest from '../utils/wxRequest.js'
const proxyRigUrl = import.meta.env.VITE_APP_RIG_API
//区域接口
export const findDetail = (params?: Record<string, unknown>) =>
	$post('/pw-weapp-api/goods/goodsInfo/findGoodsDetailInfo', params, false)
export const testApi = (params?: Record<string, unknown>) =>
	$post(proxyRigUrl + '/wbshare/content/getSurveyorDataInfo', params, false)
