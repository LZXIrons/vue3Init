// 将数字转换成金额显示
export const formatMoney = (num: number | string | undefined) => {
	if (!num) {
		return 0
	}
	if (typeof num === 'string') {
		num = Number(num.slice(1).split(',').join(''))
	}
	num = num.toFixed(2)
	num = parseFloat(num)
	num = num.toLocaleString()
	return num
}

// 空格分隔手机号码
export const formatPhone = (num: number | string | undefined) => {
	if (!num) {
		return ''
	}
	return num.toString().replace(/^(.{3})(.*)(.{4})$/, '$1 $2 $3')
}

export const getBase64 = (file: File) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = error => reject(error)
	})
}

/**
 * 对象按字母升序排序
 * @param  {[object]} obj [需要升序的对象]
 * @return {[object]}     [需要升序的对象]
 */
export const objKeySort = (obj: { [key: string]: any }) => {
	const newkey = Object.keys(obj).sort()
	const newObj: { [key: string]: any } = {}
	for (let i = 0; i < newkey.length; i++) {
		newObj[newkey[i]] = obj[newkey[i]]
	}
	return newObj
}

export const formatTime = (date: Date) => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return (
		[year, month, day].map(formatNumber).join('-') +
		' ' +
		[hour, minute, second].map(formatNumber).join(':')
	)
}
const formatNumber = (n: number | string) => {
	n = n.toString()
	return n[1] ? n : '0' + n
}
