export function isWeChat(): boolean {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  const ua = window.navigator.userAgent.toLowerCase()
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if (ua.includes('micromessenger')) {
    console.log('微信浏览器环境')
    return true
  } else {
    console.log('非微信浏览器环境')
    return false
  }
}
//设备判断是不是微信浏览器
export const isWxBrowser = isWeChat()
