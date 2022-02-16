export const Pattern = {
	phone:
		/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/,
	email: /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
	idcard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
	number: /^[0-9]*$/,
	chinese: /^[\u4e00-\u9fa5]{0,}$/,
	website: /(http|https):\/\/([\w.]+\/?)\S*/
}

// 必填
export const requiredRule = ({
	message = '内容不能为空',
	trigger = 'blur',
	type = 'string'
} = {}) => {
	return {
		required: true,
		message,
		trigger,
		type
	}
}

// 范围
export const rangeRule = ({ min = 1, max = 100, trigger = 'blur' } = {}) => {
	return { min, max, message: `长度为${min}-${max}范围内`, trigger }
}

// 自定义校验
export const patternRule = ({
	pattern = Pattern.phone,
	message = '请输入正确的手机号码',
	trigger = 'blur'
} = {}) => {
	return {
		pattern,
		message,
		trigger
	}
}
