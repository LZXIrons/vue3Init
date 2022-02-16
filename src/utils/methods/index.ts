// ua命中商城
export const isUaApp = () => {
	// eslint-disable-next-line no-useless-escape
	const iOSUaReg = /WBIAO_MARKET_([\d\.]+)_IOS_([\d_]+)/gi
	// eslint-disable-next-line no-useless-escape
	const androidUaReg = /WBIAO_MARKET_([\d\._]+)\scom.wbiao.wbapp\s([\d\s\.]+)/gi
	const userAgent = navigator.userAgent
	// eslint-disable-next-line no-useless-escape
	const androidUaRegZhongPackageName = 'com.wbiao.luxurypb'
	// eslint-disable-next-line no-useless-escape
	const isoUaRegZhongPackageName = 'WBIAO_LUXURY_PB'
	return (
		iOSUaReg.test(userAgent) ||
		androidUaReg.test(userAgent) ||
		userAgent.includes(androidUaRegZhongPackageName) ||
		userAgent.includes(isoUaRegZhongPackageName)
	)
}
