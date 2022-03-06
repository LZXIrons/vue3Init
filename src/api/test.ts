import { $post, $get } from '@/utils/libs/test'
// import wxRequest from '../utils/wxRequest.js'
const proxyRigUrl = '/api'
//区域接口
export const findDetail = (params?: Record<string, unknown>) =>
	$post(proxyRigUrl + '/topic/detail', params, false)
export const testApi = (params?: Record<string, unknown>) =>
	$post(proxyRigUrl + '/wbshare/content/getSurveyorDataInfo', params, false)
