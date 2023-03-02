import { defHttp } from '@/utils/libs/axios'
// import { proxyMcUrl } from '@config/constant'
export const findMusic = params =>
	defHttp.get({ url: '/search/suggest', params })
export const findHotMusic = () => defHttp.get({ url: '/search/hot/detail' })
