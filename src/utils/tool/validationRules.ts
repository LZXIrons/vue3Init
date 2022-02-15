// 这里写一些校验规则
export const validationRules = {
  // 必填
  isNonEmpty(value: string, errorMsg: string) {
    return value === '' ? errorMsg : ''
  },
  // 最小长度
  minLength(value: string, length: number, errorMsg: string) {
    return value.length < length ? errorMsg : ''
  },
  // 最大长度
  maxLength(value: string, length: number, errorMsg: string) {
    return value.length > length ? errorMsg : ''
  },
  // mobile
  isMoblie(value: string, errorMsg: string) {
    return !/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(
      value
    )
      ? errorMsg
      : ''
  },
  // e-mail
  isEmail(value: string, errorMsg: string) {
    return !/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
      ? errorMsg
      : ''
  },
  // 身份证
  isIDCard(value: string, errorMsg: string) {
    return !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
      ? errorMsg
      : ''
  },
  // 最小长度
  isURL(value: string, length: number, errorMsg: string) {
    return !/^(https?|ftp|file):\/\/.+$/.test(value) ? errorMsg : ''
  },
  // 电话号码
  isPhone(value: string, errorMsg: string) {
    return !/^1[3456789]\d{9}$/.test(value) ? errorMsg : ''
  }
}
