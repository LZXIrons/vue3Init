/*
 * url 目标url
 * arg 需要替换的参数名称
 * arg_val 替换后的参数的值
 * return url 参数替换后的url
 */
export const changeURLArg = (url: string, arg: any, argVal: any) => {
	// 计算表达式的值
	function evil(fn: string) {
		const Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
		return new Fn('return ' + fn)()
	}
	const pattern = arg + '=([^&]*)'
	const replaceText = arg + '=' + argVal
	if (url.match(pattern)) {
		let tmp = '/(' + arg + '=)([^&]*)/gi'
		tmp = url.replace(evil(tmp), replaceText)
		return tmp
	} else if (url.match('[?]')) {
		return url + '&' + replaceText
	} else {
		return url + '?' + replaceText
	}
}
// 手机号 掩码
export const maskePhoneNumber = (tel: string) => {
	const mystr = tel.substring(0, 4 - 1) + '****' + tel.substring(6 + 1)
	return mystr
}
