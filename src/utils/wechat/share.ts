import { WechatConfig } from '@/constant/wechat/config'
import cookies from 'js-cookie'
import { Toast } from 'vant'
import { wbAppBridge } from '@/utils/webview'
import { isUaApp } from '@/utils/methods'
import { changeURLArg } from '@/utils/tool'
import { Properties } from '@/constant'
import { isWxBrowser } from '@/utils/environment'
import { getSignatureData } from '@/api/common'
// 增加微信js-sdk分享
export interface WeChatShareEntity {
	title?: string
	shareUrl?: string
	describe?: string
	imageUrl?: string
	path?: string
	shareStyle?: string
}
export interface WbAppBridgeEntity {
	method?: string
	params?: WeChatShareEntity | string
	success?: Function
}

export interface WxGzh {
	link?: string
	desc?: string
	imgUrl?: string
}

export async function wechatShare(
	{
		title = '',
		describe = '',
		imageUrl = '',
		shareUrl = '',
		path = '',
		shareStyle = 'share_text'
	}: WeChatShareEntity,
	{
		link = location.href,
		imgUrl = WechatConfig.PIC.wxShareIcon,
		desc = ''
	}: WxGzh
) {
	// 浏览器打开, 企业微信内打开暂时没有支持jssdk配置
	if (isWxBrowser) {
		const dr = cookies.get(Properties.TALENT_ID) || ''
		const kfd = cookies.get(Properties.KEFU_ID) || ''
		const linkForDr = cookies.get(Properties.APP_SOURCE)?.includes('app')
			? link
			: changeURLArg(link, 'dr', dr) // 带有达人id的分享链接
		const shareLink = changeURLArg(linkForDr, 'kfd', kfd) // 带有客服分销id的分享链接
		const appId = WechatConfig.WECHATID[process.env.NODE_ENV]
		const wx = (window as any).wx
		try {
			const { timestamp, nonceStr, signature } = await getSignatureData({
				appId,
				url: encodeURIComponent(location.href)
			})
			// 接入微信配置
			wx.config({
				debug: false,
				appId,
				timestamp,
				nonceStr,
				signature,
				jsApiList: [
					'updateAppMessageShareData',
					'updateTimelineShareData',
					'hideAllNonBaseMenuItem',
					'showAllNonBaseMenuItem'
				]
			})
			// 微信分享
			wx.ready(() => {
				// 分享到朋友圈
				wx.updateTimelineShareData({
					title,
					link: shareLink,
					imgUrl
				})
				// 分享到朋友
				wx.updateAppMessageShareData({
					title,
					desc,
					link: shareLink,
					imgUrl
				})
			})
		} catch (e) {
			Toast('接入出错')
		}
	}
	// 如果是app打开
	if (isUaApp()) {
		const wbAppShareParams: WeChatShareEntity = {
			title,
			describe,
			imageUrl,
			shareUrl,
			path,
			shareStyle
		}
		// App分享
		const wbAppBridgeParams: WbAppBridgeEntity = {
			method: 'wbApp-setShareAction',
			params: wbAppShareParams
		}
		wbAppBridge(wbAppBridgeParams)
	}
}
// 隐藏微信js-sdk分享 (严格上说：隐藏所有非基础按钮接口)
// export function hideAllMenuItem() {
//   wx.ready(() => {
//     wx.hideAllNonBaseMenuItem()
//   })
// }
// 显示微信js-sdk分享 (严格上说：显示所有功能按钮接口)
// export function showAllMenuItem() {
//   wx.ready(() => {
//     wx.showAllNonBaseMenuItem()
//   })
// }
