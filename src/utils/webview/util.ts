import {isUaApp} from '@/utils/methods'
// import cookies from 'js-cookie'
export function webView(callback: any) {
  // 如果没有这个标记 => 则不是app
  if (!isUaApp()) {
    return false
  }
  // Android使用
  if (window.WebViewJavascriptBridge) {
    try {
      window.WebViewJavascriptBridge.init &&
        window.WebViewJavascriptBridge.init() /* android */
      // eslint-disable-next-line no-empty
    } catch (e) {
      console.log(e);
    }
    return callback(window.WebViewJavascriptBridge)
  } else {
    /** 如果 WebViewJavascriptBridge 未定义，绑定 WebViewJavascriptBridgeReady 事件 */
    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      function () {
        try {
          window.WebViewJavascriptBridge.init() /* android */
          callback(window.WebViewJavascriptBridge)
        } catch (err) {
          callback(window.WebViewJavascriptBridge)
        }
      },
      false
    )
  }
  // IOS使用
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  const WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}



